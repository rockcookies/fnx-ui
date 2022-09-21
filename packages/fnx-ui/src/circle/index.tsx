import React, { forwardRef, useEffect, useMemo, useRef } from 'react';
import configComponentProps from '../hooks/config-component-props';
import { getSizeStyle } from '../utils/format';
import { classnames, createBEM } from '../utils/namespace';
import { CircleGapPosition, CircleProps } from './interface';

const NS = 'fnx-circle';
const bem = createBEM(NS);

let uid = 0;

const useProps = configComponentProps<
	Required<
		Pick<
			CircleProps,
			| 'progress'
			| 'speed'
			| 'strokeWidth'
			| 'strokeLinecap'
			| 'gapDegree'
			| 'clockwise'
		>
	>
>({
	strokeWidth: 5,
	progress: 100,
	speed: 1,
	strokeLinecap: 'round',
	gapDegree: 0,
	clockwise: true,
});

function stripPercentToNumber(progress: string) {
	return +progress.replace('%', '');
}

function toArray(symArray: any) {
	return Array.isArray(symArray) ? symArray : [symArray];
}

function getPathStyles(
	offset: number,
	progress: number,
	strokeWidth: number | string,
	strokeColor?: string,
	gapDegree = 0,
	gapPosition?: CircleGapPosition,
	clockwise?: boolean,
) {
	const radius = 50 - Number(strokeWidth) / 2;
	let beginPositionX = 0;
	let beginPositionY = -radius;
	let endPositionX = 0;
	let endPositionY = -2 * radius;

	switch (gapPosition) {
		case 'left':
			beginPositionX = -radius;
			beginPositionY = 0;
			endPositionX = 2 * radius;
			endPositionY = 0;
			break;
		case 'right':
			beginPositionX = radius;
			beginPositionY = 0;
			endPositionX = -2 * radius;
			endPositionY = 0;
			break;
		case 'bottom':
			beginPositionY = radius;
			endPositionY = 2 * radius;
			break;
		default:
	}

	const sweepFlag = clockwise ? 1 : 0;
	const pathString = `M 50,50 m ${beginPositionX},${beginPositionY}
   a ${radius},${radius} 0 1 ,${sweepFlag} ${endPositionX},${-endPositionY}
   a ${radius},${radius} 0 1 ,${sweepFlag} ${-endPositionX},${endPositionY}`;
	const len = Math.PI * 2 * radius;

	const pathStyle = {
		stroke: typeof strokeColor === 'string' ? strokeColor : undefined,
		strokeDasharray: `${(progress / 100) * (len - gapDegree)}px ${len}px`,
		strokeDashoffset: `-${
			gapDegree / 2 + (offset / 100) * (len - gapDegree)
		}px`,
		transition:
			'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s',
	};

	return {
		pathString,
		pathStyle,
	};
}

const useTransitionDuration = (progressList: number[], speed: number) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const paths = progressList.map(() => useRef<SVGPathElement>(null));
	const prevTimeStamp = useRef<any>(null);

	useEffect(() => {
		const now = Date.now();
		let updated = false;

		Object.keys(paths).forEach((key: any) => {
			const path = paths[key].current;
			if (!path) {
				return;
			}

			updated = true;
			const pathStyle = path.style;
			pathStyle.transitionDuration = `${speed * 0.3}s, ${speed * 0.3}s, ${
				speed * 0.3
			}s, ${speed * 0.06}s`;

			if (prevTimeStamp.current && now - prevTimeStamp.current < 100) {
				pathStyle.transitionDuration = '0s, 0s';
			}
		});

		if (updated) {
			prevTimeStamp.current = Date.now();
		}
	});

	return [paths];
};

const Circle = forwardRef<HTMLDivElement, CircleProps>((_props, ref) => {
	const [
		{ strokeWidth, progress, speed, strokeLinecap, gapDegree, clockwise },
		{
			size,
			gapPosition,
			strokeColor,
			trailColor,
			className,
			style,
			children,
			...restProps
		},
	] = useProps(_props);

	const progressList = toArray(progress);
	const [paths] = useTransitionDuration(progressList, speed);
	const strokeColorList = toArray(strokeColor);
	const { pathString, pathStyle } = getPathStyles(
		0,
		100,
		strokeWidth,
		trailColor,
		gapDegree,
		gapPosition,
	);

	const gradient = strokeColorList.find(
		(color) => Object.prototype.toString.call(color) === '[object Object]',
	);

	const id = useMemo(() => {
		uid += 1;
		return `fnx-circle-linearGradient-${uid}`;
	}, []);

	const getStokeList = () => {
		let stackPtg = 0;
		return progressList.map((ptg, index) => {
			const color =
				strokeColorList[index] ||
				strokeColorList[strokeColorList.length - 1];

			const stroke =
				Object.prototype.toString.call(color) === '[object Object]'
					? `url(#${id})`
					: '#1989fa';

			const pathStyles = getPathStyles(
				stackPtg,
				ptg,
				strokeWidth,
				color,
				gapDegree,
				gapPosition,
				clockwise,
			);
			stackPtg += ptg;

			return (
				<path
					key={index}
					className={bem('hover')}
					d={pathStyles.pathString}
					stroke={stroke}
					strokeLinecap={strokeLinecap}
					strokeWidth={strokeWidth}
					opacity={ptg === 0 ? 0 : 1}
					fillOpacity="0"
					style={pathStyles.pathStyle}
					ref={paths[index]}
				/>
			);
		});
	};

	return (
		<div
			className={classnames(bem(), className)}
			style={{
				...style,
				...getSizeStyle(size),
			}}
			{...restProps}
			ref={ref}
		>
			<svg viewBox="0 0 100 100">
				{gradient && (
					<defs>
						<linearGradient
							id={id}
							x1="100%"
							y1="0%"
							x2="0%"
							y2="0%"
						>
							{Object.keys(gradient)
								.sort(
									(a, b) =>
										stripPercentToNumber(a) -
										stripPercentToNumber(b),
								)
								.map((key, index) => (
									<stop
										key={index}
										offset={key}
										stopOpacity={1}
										stopColor={gradient[key]}
									/>
								))}
						</linearGradient>
					</defs>
				)}
				<path
					className={bem('trail')}
					d={pathString}
					stroke={trailColor}
					strokeLinecap={strokeLinecap}
					strokeWidth={strokeWidth}
					fillOpacity="0"
					style={pathStyle}
				/>
				{getStokeList().reverse()}
			</svg>

			<div className={bem('text')}>{children}</div>
		</div>
	);
});

Circle.displayName = 'Circle';

export type {
	CircleComponentProps,
	CircleGapPosition,
	CircleLinecap,
	CircleProps,
	CircleStringGradients,
} from './interface';

export default Circle;
