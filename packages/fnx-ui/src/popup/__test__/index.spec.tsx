import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import _Popup from '../index';
import { PopupProps } from '../interface';

describe('<Popup/>', () => {
	beforeEach(() => {
		jest.useFakeTimers();
	});

	afterEach(() => {
		jest.useRealTimers();
	});

	const Popup = (props: PopupProps) => <_Popup mountTo={false} {...props} />;
	const ddc = () => document.body.classList;

	it('should lazy render content by default', () => {
		const children = <div className="foo" />;

		const { container, rerender } = render(<Popup>{children}</Popup>);
		expect(container.querySelector('.foo')).toBeNull();

		rerender(<Popup visible={true}>{children}</Popup>);
		expect(container.querySelector('.foo')).not.toBeNull();
	});

	it('should lock scroll when showed', () => {
		const { rerender } = render(<Popup visible={true} />);

		expect(ddc().contains('fnx-overflow-hidden')).toBeTruthy();

		rerender(<Popup visible={false} />);
		jest.runAllTimers();

		expect(ddc().contains('fnx-overflow-hidden')).not.toBeTruthy();
	});

	it('multiple popup should lock page correctly', () => {
		const Demo = ({ visible = false, visible2 = false, ...restProps }) => (
			<div>
				<Popup {...restProps} visible={visible} />
				<Popup {...restProps} visible={visible2} />
			</div>
		);

		const { container, rerender } = render(<Demo />);

		expect(container.querySelectorAll('.fnx-popup').length).toBe(0);

		rerender(<Demo visible={true} />);
		jest.runAllTimers();
		expect(container.querySelectorAll('.fnx-popup').length).toBe(1);
		expect(ddc().contains('fnx-overflow-hidden')).toBeTruthy();

		rerender(<Demo visible2={true} />);
		jest.runAllTimers();
		expect(container.querySelectorAll('div.fnx-popup').length).toBe(2);
		expect(ddc().contains('fnx-overflow-hidden')).toBeTruthy();

		rerender(<Demo />);
		jest.runAllTimers();
		expect(ddc().contains('fnx-overflow-hidden')).not.toBeTruthy();

		rerender(<Demo visible={true} />);
		jest.runAllTimers();
		expect(ddc().contains('fnx-overflow-hidden')).toBeTruthy();

		rerender(<Demo visible={false} visible2={true} />);
		jest.runAllTimers();
		expect(ddc().contains('fnx-overflow-hidden')).toBeTruthy();

		rerender(<Demo />);
		jest.runAllTimers();
		expect(ddc().contains('fnx-overflow-hidden')).not.toBeTruthy();
	});

	it('should allow to using mountTo prop', () => {
		const div = document.createElement('div');

		render(<Popup visible={true} mountTo={() => div} />);
		expect(div.querySelectorAll('.fnx-popup')).toBeTruthy();
	});

	it('should render overlay by default', () => {
		const { container } = render(<Popup visible={true} />);

		expect(container.querySelector('.fnx-overlay')).not.toBeNull();
	});

	it('should not render overlay when overlay prop is false', () => {
		const { container } = render(<Popup visible={true} overlay={false} />);

		expect(container.querySelector('.fnx-overlay')).toBeNull();
	});

	it('should emit onOverlayClick event when overlay is clicked', () => {
		const onOverlayClick = jest.fn();

		const { container } = render(
			<Popup visible={true} onOverlayClick={onOverlayClick} />,
		);

		const overlay = container.querySelector('.fnx-overlay');

		if (overlay) {
			fireEvent(
				overlay,
				new MouseEvent('click', {
					cancelable: true,
					bubbles: true,
				}),
			);
		}

		expect(onOverlayClick).toHaveBeenCalledTimes(1);
	});

	it('should emit show event when show prop is set to true', () => {
		const onShow = jest.fn();
		const onAfterShow = jest.fn();

		const { rerender } = render(<Popup />);

		rerender(
			<Popup visible={true} onShow={onShow} onAfterShow={onAfterShow} />,
		);
		jest.runAllTimers();

		expect(onShow).toHaveBeenCalledTimes(1);
		expect(onAfterShow).toHaveBeenCalledTimes(1);
	});

	it('should emit close event when show prop is set to false', () => {
		const onHide = jest.fn();
		const onAfterHide = jest.fn();

		const { rerender } = render(<Popup visible={true} />);

		rerender(
			<Popup visible={false} onHide={onHide} onAfterHide={onAfterHide} />,
		);
		jest.runAllTimers();

		expect(onHide).toHaveBeenCalledTimes(1);
		expect(onAfterHide).toHaveBeenCalledTimes(1);
	});

	it('should change duration when using duration prop', () => {
		const { container } = render(
			<Popup visible={true} transitionDuration={500} />,
		);

		const popup = container.querySelector<HTMLElement>('.fnx-popup');
		const overlay = container.querySelector<HTMLElement>('.fnx-overlay');

		expect(popup && popup.style.transitionDuration).toEqual('500ms');
		expect(overlay && overlay.style.transitionDuration).toEqual('500ms');
	});

	it('should have "fnx-popup--round" class when setting the round prop', () => {
		const { container } = render(<Popup visible={true} round={true} />);

		expect(container.querySelector('.fnx-popup--round')).not.toBeNull();
	});
});
