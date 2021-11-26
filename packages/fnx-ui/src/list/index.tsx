import React, {
	forwardRef,
	useCallback,
	useContext,
	useEffect,
	useImperativeHandle,
	useMemo,
	useRef,
} from 'react';
import Tabs from '../tabs';
import useProps from '../hooks/use-props';
import useDefaultsRef from '../hooks/use-defaults-ref';
import useUpdateEffect from '../hooks/use-update-effect';
import Loading from '../loading';
import { useLocale } from '../locale';
import { getScrollParent } from '../utils/dom/scroll';
import { getElementRect, isHidden } from '../utils/dom/style';
import { noop } from '../utils/misc';
import { classnames, createBEM } from '../utils/namespace';
import { ListComponentProps, ListProps, ListRef } from './interface';

const NS = 'fnx-list';
const bem = createBEM(NS);

type ListRequiredProps = Required<ListComponentProps>;

const DEFAULT_PROPS: ListRequiredProps = {
	status: 'default',
	offset: 50,
	direction: 'down',
	slots: {},
	onLoad: noop,
	immediateCheck: true,
	scrollListenTo: null,
};

const List = forwardRef<ListRef, ListProps>((_props, ref) => {
	const locale = useLocale('list');

	const [props, { className, children, ...restProps }] = useProps<
		ListRequiredProps,
		ListProps
	>(DEFAULT_PROPS, _props);

	const propsRef = useDefaultsRef(props);

	const rootRef = useRef<HTMLDivElement>(null);
	const scrollParentRef = useRef<HTMLElement | Window>();
	const placeholderRef = useRef<HTMLDivElement>(null);

	const { status, direction, slots } = props;

	const { active: tabPanelActive } = useContext(Tabs.PanelContext);
	const tabPanelActiveRef = useDefaultsRef(tabPanelActive);

	const check = useCallback(() => {
		const { status } = propsRef.current;

		if (status !== 'default') return;

		const root = rootRef.current;
		const scrollParent = scrollParentRef.current;
		const placeholder = placeholderRef.current;

		if (
			!scrollParent ||
			!placeholder ||
			!root ||
			// skip check when inside an inactive tab
			tabPanelActiveRef.current === false
		) {
			return;
		}

		const scrollParentRect = getElementRect(scrollParent);

		if (scrollParentRect.height <= 0 || isHidden(root)) {
			return;
		}

		let isReachEdge = false;
		const placeholderRect = getElementRect(placeholder);

		const { direction, offset } = propsRef.current;

		if (direction === 'up') {
			isReachEdge = scrollParentRect.top - placeholderRect.top <= offset;
		} else {
			isReachEdge =
				placeholderRect.bottom - scrollParentRect.bottom <= offset;
		}

		if (isReachEdge) {
			propsRef.current.onLoad();
		}
	}, [propsRef, tabPanelActiveRef]);

	const listRef = useMemo<ListRef>(
		() => ({
			root: rootRef.current,
			scrollParent: scrollParentRef.current || null,
			check,
		}),
		[check],
	);

	useImperativeHandle<ListRef, ListRef>(ref, () => listRef, [listRef]);

	useEffect(() => {
		const node = rootRef.current;
		if (!node) return;

		const { scrollListenTo, immediateCheck } = propsRef.current;

		if (typeof scrollListenTo === 'function') {
			scrollParentRef.current = scrollListenTo();
		} else if (scrollListenTo) {
			scrollParentRef.current = scrollListenTo;
		}

		const scrollParent = scrollParentRef.current || getScrollParent(node);
		scrollParentRef.current = scrollParent;

		scrollParent.addEventListener('scroll', check);

		if (immediateCheck) {
			check();
		}

		return () => {
			scrollParent.removeEventListener('scroll', check);
		};
	}, [check, propsRef]);

	useUpdateEffect(() => {
		check();
	}, [check, tabPanelActive, status]);

	const renderSlots = () => {
		let el = slots[status];

		if (status === 'loading' && el == null) {
			el = <Loading size={16} text={locale.loading} />;
		}

		if (el) {
			return <div className={bem('indicator')}>{el}</div>;
		}
	};

	const placeholder = (
		<div ref={placeholderRef} className={bem('placeholder')} />
	);

	return (
		<div
			className={classnames(bem([status]), className)}
			role="feed"
			aria-busy={status === 'loading'}
			{...restProps}
			ref={rootRef}
		>
			{direction === 'down' ? children : placeholder}
			{renderSlots()}
			{direction === 'up' ? children : placeholder}
		</div>
	);
});

List.displayName = 'List';

export type {
	ListComponentProps,
	ListProps,
	ListRef,
	ListSlots,
	ListDirection,
	ListStatus,
} from './interface';

export default List;
