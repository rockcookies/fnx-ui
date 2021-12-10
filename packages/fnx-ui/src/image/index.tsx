import React, { CSSProperties, useEffect, useMemo, useState } from 'react';
import Icon from '../icon';
import { addUnit } from '../utils/format';
import { noop } from '../utils/misc';
import { classnames, createBEM } from '../utils/namespace';
import { createDefaultsForwardRef } from '../utils/react';
import { ImageProps } from './interface';

type ImageStatus = 'none' | 'normal' | 'loading' | 'error';

const NS = 'fnx-image';
const bem = createBEM(NS);

const LOADING = <Icon name="photo" />;

const ERROR = <Icon name="photo-fail" />;

const Image = createDefaultsForwardRef<
	HTMLSpanElement,
	ImageProps,
	Required<
		Pick<ImageProps, 'fit' | 'radius' | 'slots' | 'onLoad' | 'onError'>
	>
>(
	'Image',
	{
		fit: 'fill',
		radius: 0,
		slots: {},
		onLoad: noop,
		onError: noop,
	},
	(
		{
			fit,
			radius,
			slots,
			onLoad,
			onError,
			// optionals
			src,
			width,
			height,
			alt,
			round,
			className,
			style,
			children,
			...restProps
		},
		ref,
	) => {
		const [status, setStatus] = useState<ImageStatus>(() =>
			src ? 'loading' : 'none',
		);

		const [imageSrc, setImageSrc] = useState<string | undefined>();

		useEffect(() => {
			setImageSrc(src);
			setStatus(src ? 'loading' : 'none');
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
			if (
				(status === 'loading' || status === 'none') &&
				slots.loading !== false
			) {
				return (
					<span className={bem('loading')}>
						{slots.loading || LOADING}
					</span>
				);
			}

			if (status === 'error' && slots.error !== false) {
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
				ref={ref}
			>
				{(status === 'loading' || status === 'normal') && (
					<img
						className={bem('img')}
						src={imageSrc}
						alt={alt}
						style={{
							objectFit: fit,
						}}
						onLoad={(e) => {
							setStatus('normal');
							onLoad(e);
						}}
						onError={(e) => {
							setStatus('error');
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
