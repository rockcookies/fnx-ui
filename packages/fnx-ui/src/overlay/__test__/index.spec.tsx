import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Overlay from '../index';

describe('<Overlay/>', () => {
	it('should change z-index when using z-index prop', () => {
		const { getByTestId } = render(
			<Overlay data-testid="overlay" zIndex={99} />,
		);

		const overlay = getByTestId('overlay');
		expect(overlay.style.zIndex).toEqual('99');
	});

	it('should change transition duration when using duration prop', () => {
		const { getByTestId } = render(
			<Overlay data-testid="overlay" transitionDuration={100} />,
		);

		const overlay = getByTestId('overlay');
		expect(overlay.style.transitionDuration).toEqual('100ms');
	});

	it('should allow to touchmove when lock-scroll is false', async () => {
		const onTouchMove = jest.fn();

		const { getByTestId } = render(
			<div onTouchMove={onTouchMove}>
				<Overlay
					data-testid="overlay"
					lockScroll={false}
					visible={true}
				/>
			</div>,
		);

		const overlay = getByTestId('overlay');

		fireEvent(
			overlay,
			new TouchEvent('touchmove', {
				bubbles: true,
				cancelable: true,
			}),
		);

		expect(onTouchMove).toHaveBeenCalledTimes(1);
	});

	it('should not allow to touchmove when lock-scroll is true', async () => {
		const onTouchMove = jest.fn();

		const { getByTestId } = render(
			<div onTouchMove={onTouchMove}>
				<Overlay
					data-testid="overlay"
					lockScroll={true}
					visible={true}
				/>
			</div>,
		);

		const overlay = getByTestId('overlay');

		fireEvent(
			overlay,
			new TouchEvent('touchmove', {
				bubbles: true,
				cancelable: true,
			}),
		);

		expect(onTouchMove).toHaveBeenCalledTimes(0);
	});
});
