import { act, render, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import NoticeBar from '../index';
import { NoticeBarRef } from '../interface';
import TestsReact from '../../../test/react';
import TestsDOM from '../../../test/dom';
describe('<NoticeBar/>', () => {
	const mockRect = (el: Element, rect: Partial<DOMRect>) => {
		Object.defineProperty(el, 'getBoundingClientRect', {
			configurable: true,
			get: () => {
				return () => ({
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					width: 0,
					height: 0,
					...rect,
				});
			},
		});
	};

	beforeEach(() => {
		jest.useFakeTimers();
	});

	afterAll(() => {
		jest.useRealTimers();
	});

	it('clear noticeBar element when close icon is clicked', () => {
		const { container } = render(
			<NoticeBar marquee closeable>
				Content
			</NoticeBar>,
		);

		const target = TestsDOM.mustQuerySelector(
			container,
			'.fnx-notice-bar__close-icon',
		);

		fireEvent.click(target);

		expect(container).toMatchSnapshot();
	});

	it('should render children correct', () => {
		const { container } = render(
			<NoticeBar marqueeDelay={0} marquee>
				Content
			</NoticeBar>,
		);

		expect(container).toMatchSnapshot();
	});

	it('should not start scrolling when marquee false', () => {
		const { container } = render(
			<NoticeBar marqueeDelay={0} marquee={false}>
				Content
			</NoticeBar>,
		);

		expect(container).toMatchSnapshot();
	});

	it('should start scrolling when marquee auto and marquee width > marquee-wrapper width', () => {
		const { container } = render(
			<NoticeBar marquee="auto" marqueeDelay={0}>
				Content
			</NoticeBar>,
		);

		const wrapper = TestsDOM.mustQuerySelector(
			container,
			'.fnx-notice-bar__marquee-wrapper',
		);

		const content = TestsDOM.mustQuerySelector(
			container,
			'.fnx-notice-bar__marquee',
		);

		mockRect(wrapper, {
			width: 50,
			height: 50,
		});

		mockRect(content, {
			width: 100,
			height: 50,
		});

		act(() => {
			jest.runTimersToTime(2000);
		});

		expect(container).toMatchSnapshot();
	});

	it('should expose reset methods', () => {
		const NoticeBarRef = React.createRef<NoticeBarRef>();

		const {} = render(
			<NoticeBar ref={NoticeBarRef} marqueeDelay={0} marquee>
				Content
			</NoticeBar>,
		);

		act(() => {
			TestsReact.mustGetRef(NoticeBarRef).reset();
		});

		expect(TestsReact.mustGetRef(NoticeBarRef).reset).toBeTruthy();
	});
});
