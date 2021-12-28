import React, {
	CSSProperties,
	useImperativeHandle,
	useMemo,
	useRef,
	useState,
} from 'react';
import configComponentProps from '../hooks/config-component-props';
import useUpdateEffect from '../hooks/use-update-effect';
import Icon from '../icon';
import { addUnit } from '../utils/format';
import { noop } from '../utils/misc';
import { classnames, createBEM } from '../utils/namespace';
import { createForwardRef } from '../utils/react';
import { ImageProps } from './interface';
import LazyDetector from './LazyDetector';

const NS = 'fnx-image';
const bem = createBEM(NS);

const useProps = configComponentProps<
	Required<
		Pick<
			ImageProps,
			'fit' | 'radius' | 'slots' | 'onLoad' | 'onError' | 'lazy'
		>
	>
>({
	fit: 'fill',
	radius: 0,
	slots: {},
	onLoad: noop,
	onError: noop,
	lazy: false,
});

const LOADING = <Icon name="photo" />;

const ERROR = <Icon name="photo-fail" />;

const Image = createForwardRef<HTMLSpanElement, ImageProps>(
	'Image',
	(_props, ref) => {
		const [
			{ fit, radius, slots, onLoad, onError, lazy },
			{
				src: _src,
				width,
				height,
				alt,
				round,
				className,
				style,
				children,
				...restProps
			},
		] = useProps(_props);

		const rootRef = useRef<HTMLSpanElement | null>(null);

		const [loaded, setLoaded] = useState(false);
		const [failed, setFailed] = useState(false);
		const [initialized, setInitialized] = useState(!lazy);

		const src = initialized ? _src : undefined;

		useImperativeHandle<HTMLSpanElement | null, HTMLSpanElement | null>(
			ref,
			() => rootRef.current,
		);

		useUpdateEffect(() => {
			setLoaded(false);
			setFailed(false);
		}, [src]);

		const containerStyle = useMemo(() => {
			const style: CSSProperties = {};

			if (width != null) {
				style.width = addUnit(width);
			}

			if (height != null) {
				style.height = addUnit(height);
			}

			if (radius) {
				style.overflow = 'hidden';
				style.borderRadius = addUnit(radius);
			}

			return style;
		}, [width, height, radius]);

		const renderSlots = () => {
			if (!failed && !loaded && slots.loading !== false) {
				return (
					<span className={bem('loading')}>
						{slots.loading || LOADING}
					</span>
				);
			}

			if (failed && slots.error !== false) {
				return (
					<span className={bem('error')}>{slots.error || ERROR}</span>
				);
			}
		};

		return (
			<span
				className={classnames([bem({ round })], className)}
				style={{ ...containerStyle, ...style }}
				{...restProps}
				ref={rootRef}
			>
				{lazy && !initialized && (
					<LazyDetector
						nodeRef={rootRef}
						onActive={() => setInitialized(true)}
					/>
				)}

				{!failed && src && (
					<img
						className={bem('img')}
						src={src}
						alt={alt}
						style={{
							objectFit: fit,
						}}
						onLoad={(e) => {
							setLoaded(true);
							onLoad(e);
						}}
						onError={(e) => {
							setFailed(true);
							onError(e);
						}}
					/>
				)}

				{renderSlots()}
				{children}
			</span>
		);
	},
);

export type {
	ImageComponentProps,
	ImageFit,
	ImageProps,
	ImageSlots,
} from './interface';
export default Image;
