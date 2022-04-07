import {
	Context,
	CSSProperties,
	ForwardRefExoticComponent,
	HTMLAttributes,
	ReactNode,
	RefAttributes,
} from 'react';
import PopupSelect from './PopupSelect';
import Portal from './Portal';

export type PopupPosition = 'top' | 'bottom' | 'right' | 'left' | 'center';

export interface PortalProps {
	visible?: boolean;
	renderOnShow?: boolean;
	destroyOnHide?: boolean;
	mountTo?: HTMLElement | (() => HTMLElement) | false;
	children?: ReactNode;
}

export interface PopupComponentProps {
	visible?: boolean;
	renderOnShow?: boolean;
	destroyOnHide?: boolean;
	mountTo?: HTMLElement | (() => HTMLElement) | false;
	transitionDuration?: number;
	transitionName?: string;
	lockScroll?: boolean;
	position?: PopupPosition;
	round?: boolean;
	safeAreaInsetTop?: boolean;
	safeAreaInsetBottom?: boolean;
	overlay?: boolean;
	overlayClassName?: string;
	overlayStyle?: CSSProperties;
	overlayCloseable?: boolean;
	onOverlayClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
	onClose?: () => void;
	onBeforeHide?: () => void;
	onHide?: () => void;
	onAfterHide?: () => void;
	onBeforeShow?: () => void;
	onShow?: () => void;
	onAfterShow?: () => void;
}

export interface PopupContextData {
	visible: boolean;
}

export type PopupProps = PopupComponentProps & HTMLAttributes<HTMLDivElement>;

export type PopupComponent = ForwardRefExoticComponent<
	PopupProps & RefAttributes<HTMLDivElement>
>;

export interface PopupSelectComponentProps<T = any> {
	disabled?: boolean;
	value?: T;
	defaultValue?: T;
	onChange?: (v: T) => void;
	select?: ReactNode;
	selectDefaultValuePropName?: string;
	selectConfirmTrigger?: string;
	selectCancelTrigger?: string;
	trigger?: string;
	children?: ReactNode | ((value?: T) => ReactNode);
}

export type PopupSelectProps<T = any> = PopupSelectComponentProps<T> &
	Omit<PopupProps, 'defaultValue' | 'value' | 'onChange'>;

export interface PopupExportExtra {
	Portal: typeof Portal;
	Select: typeof PopupSelect;
	useOnPopupOpen: (callback: () => void) => void;
	Context: Context<PopupContextData>;
}
