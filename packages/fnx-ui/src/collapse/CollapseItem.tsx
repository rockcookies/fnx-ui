import React, {
	CSSProperties,
	forwardRef,
	ReactNode,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react';
import { CSSTransition } from 'react-transition-group';
import Cell from '../cell';
import ConfigProvider from '../config-provider';
import configComponentProps from '../hooks/config-component-props';
import useMergedProp from '../hooks/use-merged-prop';
import Icon from '../icon/Icon';
import { classnames, createBEM } from '../utils/namespace';
import CollapseContext from './context';
import { CollapseItemProps } from './interface';

const NS = 'fnx-collapse-item';
const bem = createBEM(NS);

const useProps = configComponentProps<
	Required<Pick<CollapseItemProps, 'titleProps' | 'headerProps' | 'disabled'>>
>({
	titleProps: {},
	headerProps: {},
	disabled: false,
});

const CollapseItem = forwardRef<HTMLDivElement, CollapseItemProps>(
	(_props, ref) => {
		const [
			{ titleProps, headerProps, disabled },
			{
				ghost: _ghost,
				transitionDuration: _transitionDuration,
				title,
				className,
				children,
				...restProps
			},
		] = useProps(_props);

		const { activeKey, onChange, accordion, ...ctx } =
			useContext(CollapseContext);
		const configContext = useContext(ConfigProvider.Context);

		const ghost = useMergedProp<boolean>(ctx.ghost, _ghost);
		const transitionDuration = useMergedProp<number>(
			configContext.transitionDuration,
			_transitionDuration,
		);

		const wrapperRef = useRef<HTMLDivElement | null>(null);

		const _key = (restProps as any)['data-fnx-collapse-item-key'];

		const key = useMemo<string | null>(
			() => (_key != null ? _key : null),
			[_key],
		);

		const visible = useMemo(
			() => key != null && activeKey.includes(key),
			[key, activeKey],
		);

		const contentRef = useRef<HTMLDivElement>(null);
		const [contentHeight, setContentHeight] = useState<number>();
		const [contentVisible, setContentVisible] = useState<boolean>(visible);

		const [closing, setClosing] = useState(false);
		const [rendering, setRendering] = useState(visible);

		const handleHeaderClick = () => {
			if (!disabled && key != null) {
				if (accordion) {
					onChange(visible ? [] : [key]);
				} else if (visible) {
					onChange(activeKey.filter((aKey) => aKey !== key));
				} else {
					onChange([...activeKey, key]);
				}
			}
		};

		const getContentHeight = useCallback((): number => {
			const content = contentRef.current;
			return (content && content.offsetHeight) || 0;
		}, []);

		useEffect(() => {
			if (visible) {
				setRendering(true);
				setClosing(false);
			} else {
				setClosing(true);
			}
		}, [visible]);

		const getContentWrapperStyle = () => {
			const formattedStyle: CSSProperties = {};

			if (contentHeight != null) {
				formattedStyle.height = `${contentHeight}px`;
			}

			if (!contentVisible) {
				formattedStyle.display = 'none';
			} else {
				formattedStyle.transitionDuration = `${transitionDuration}ms`;
			}

			return formattedStyle;
		};

		const renderCell = (): ReactNode => {
			const {
				title: headerTitle,
				titleProps: headerTitleProps,
				rightIcon: headerRightIcon,
				className: headerClassName,
				onClick: headerOnClick,
				...restHeaderProps
			} = headerProps;

			return (
				<Cell
					title={title || headerTitle}
					titleProps={{ ...titleProps, ...headerTitleProps }}
					rightIcon={
						<Icon className={bem('arrow')} name="arrow-right" /> ||
						headerRightIcon
					}
					clickable={!disabled}
					border={!ghost}
					className={classnames(bem('header'), headerClassName)}
					{...restHeaderProps}
					onClick={(e) => {
						handleHeaderClick();

						if (headerOnClick) {
							headerOnClick(e);
						}
					}}
				/>
			);
		};

		return (
			<div
				className={classnames(
					bem({ ghost, disabled, expended: visible }),
					className,
				)}
				{...restProps}
				ref={ref}
			>
				{renderCell()}
				<CSSTransition
					timeout={transitionDuration}
					in={rendering && !closing}
					nodeRef={wrapperRef}
					onEnter={() => {
						setContentVisible(true);
						setContentHeight(0);
					}}
					onEntering={() => {
						setContentVisible(true);
						setContentHeight(getContentHeight());
					}}
					onEntered={() => {
						setContentVisible(true);
						setContentHeight(undefined);
					}}
					onExit={() => {
						setContentVisible(true);
						setContentHeight(getContentHeight());
					}}
					onExiting={() => {
						setContentVisible(true);
						setContentHeight(0);
					}}
					onExited={() => {
						setContentVisible(false);
						setContentHeight(undefined);
						setClosing(false);
						setRendering(false);
					}}
				>
					<div
						className={bem('content-wrapper')}
						ref={wrapperRef}
						style={getContentWrapperStyle()}
					>
						{rendering && (
							<div className={bem('content')} ref={contentRef}>
								{children}
							</div>
						)}
					</div>
				</CSSTransition>
			</div>
		);
	},
);

CollapseItem.displayName = 'CollapseItem';

export default CollapseItem;
