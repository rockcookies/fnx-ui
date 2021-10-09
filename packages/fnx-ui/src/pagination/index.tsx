import React, { forwardRef, useImperativeHandle, useMemo, useRef } from 'react';
import useControlledState from '../hooks/use-controlled-state';
import useProps from '../hooks/use-props';
import { useLocale } from '../locale';
import { BORDER } from '../utils/constants';
import { clamp } from '../utils/format';
import { noop } from '../utils/misc';
import { classnames, createBEM } from '../utils/namespace';
import { PaginationProps } from './interface';

const NS = 'fnx-pagination';
const bem = createBEM(NS);

type PaginationRequiredProps = Required<
	Pick<
		PaginationProps,
		| 'total'
		| 'defaultCurrent'
		| 'pageSize'
		| 'hideOnSinglePage'
		| 'forceEllipses'
		| 'onChange'
		| 'mode'
		| 'slots'
		| 'pageItemCount'
	>
>;

const DEFAULT_PROPS: PaginationRequiredProps = {
	total: 82,
	defaultCurrent: 1,
	pageSize: 10,
	hideOnSinglePage: false,
	forceEllipses: false,
	onChange: noop,
	mode: 'multi',
	slots: {},
	pageItemCount: 5,
};

const Pagination = forwardRef<HTMLUListElement, PaginationProps>(
	(_props, ref) => {
		const locale = useLocale('pagination');

		const [
			{
				total,
				defaultCurrent,
				pageSize,
				hideOnSinglePage,
				forceEllipses,
				onChange: _onChange,
				mode,
				slots,
				pageItemCount,
			},
			{ current: __current, className, ...restProps },
		] = useProps<PaginationRequiredProps, PaginationProps>(
			DEFAULT_PROPS,
			_props,
		);

		const { value: _current, onChangeRef } = useControlledState<number>({
			value: __current,
			defaultValue: defaultCurrent,
			onChange: (num) => _onChange(num, pageSize),
		});

		const allPages = useMemo(
			() => Math.floor((total - 1) / pageSize) + 1,
			[total, pageSize],
		);

		const { current, canNext, canPrev } = useMemo(() => {
			const curr = clamp(_current, 1, allPages);

			return {
				current: curr,
				canPrev: curr > 1,
				canNext: curr < allPages,
			};
		}, [_current, allPages]);

		const paginationRef = useRef<HTMLUListElement>(null);

		useImperativeHandle<HTMLUListElement | null, HTMLUListElement | null>(
			ref,
			() => paginationRef.current,
		);

		const renderPageItem = (
			current: number,
			text: string | number,
			active?: boolean,
		) => {
			return (
				<li
					key={current}
					className={classnames([
						bem('item', { active }),
						bem('page'),
						BORDER,
					])}
					onClick={() => {
						handleChange(current);
					}}
				>
					{text}
				</li>
			);
		};

		const renderPageList = () => {
			if (mode === 'simple') {
				return (
					<li className={bem('page-dec')}>
						{current}/{allPages}
					</li>
				);
			}

			const list: JSX.Element[] = [];

			let startPage = 1;
			let endPage = allPages;
			const isMaxSized = pageItemCount < allPages;

			if (isMaxSized) {
				startPage = Math.max(
					current - Math.floor(pageItemCount / 2),
					1,
				);
				endPage = startPage + pageItemCount - 1;

				if (endPage > allPages) {
					endPage = allPages;
					startPage = endPage - pageItemCount + 1;
				}
			}

			for (let i = startPage; i <= endPage; i++) {
				list.push(renderPageItem(i, i, current === i));
			}

			if (isMaxSized && pageItemCount > 0 && forceEllipses) {
				if (startPage > 1) {
					list.unshift(renderPageItem(startPage - 1, '...'));
				}

				if (endPage < allPages) {
					list.push(renderPageItem(endPage + 1, '...'));
				}
			}

			return list;
		};

		const handleChange = (next: number) => {
			if (next !== current) {
				onChangeRef.current(next);
			}
		};

		return (
			<ul
				className={classnames([
					bem({
						simple: mode === 'simple',
						hidden: hideOnSinglePage && total <= pageSize,
					}),
					className,
				])}
				{...restProps}
				ref={paginationRef}
			>
				<li
					className={classnames(
						bem('item', { disabled: !canPrev }),
						bem('prev'),
						BORDER,
					)}
					onClick={() => {
						canPrev && handleChange(current - 1);
					}}
				>
					{slots.prev || locale.prev}
				</li>
				{renderPageList()}
				<li
					className={classnames(
						bem('item', { disabled: !canNext }),
						bem('next'),
						BORDER,
					)}
					onClick={() => {
						canNext && handleChange(current + 1);
					}}
				>
					{slots.next || locale.next}
				</li>
			</ul>
		);
	},
);

Pagination.displayName = 'Pagination';

export type {
	PaginationComponentProps,
	PaginationSlots,
	PaginationMode,
	PaginationProps,
} from './interface';

export default Pagination;
