import {
	Children,
	forwardRef,
	ForwardRefExoticComponent,
	ForwardRefRenderFunction,
	FunctionComponent,
	PropsWithoutRef,
	ReactElement,
	RefAttributes,
} from 'react';
import { isFragment } from 'react-is';

export const toElementArray = (
	children: React.ReactNode,
	option?: { keepEmpty?: boolean },
): ReactElement[] => {
	const keepEmpty = option && option.keepEmpty;
	let ret: React.ReactElement[] = [];

	Children.forEach(children, (child: any) => {
		if ((child === undefined || child === null) && !keepEmpty) {
			return;
		}

		if (Array.isArray(child)) {
			ret = ret.concat(toElementArray(child));
		} else if (isFragment(child) && child.props) {
			ret = ret.concat(toElementArray(child.props.children, option));
		} else {
			ret.push(child);
		}
	});

	return ret;
};

export const createForwardRef = <R, P = any>(
	displayName: string,
	render: ForwardRefRenderFunction<R, P>,
): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<R>> => {
	const fc = forwardRef(render);
	fc.displayName = displayName;
	return fc;
};

export const createDefaultsForwardRef = <R, P, D>(
	displayName: string,
	defaultProps: D,
	render: ForwardRefRenderFunction<R, P & D>,
): ForwardRefExoticComponent<
	PropsWithoutRef<P & Partial<D>> & RefAttributes<R>
> => {
	const fc = forwardRef(render);
	fc.displayName = displayName;
	fc.defaultProps = defaultProps;
	return fc as any;
};

export const createFC = <P = any>(
	displayName: string,
	fc: FunctionComponent<P>,
): FunctionComponent<P> => {
	fc.displayName = displayName;
	return fc;
};

export const createDefaultsFC = <P, D>(
	displayName: string,
	defaultProps: D,
	fc: FunctionComponent<P & D>,
): FunctionComponent<P & Partial<D>> => {
	fc.displayName = displayName;
	fc.defaultProps = defaultProps;
	return fc as any;
};
