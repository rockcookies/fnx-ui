import { render } from '@testing-library/react';
import React from 'react';
import Circle from '../index';
import TestsDOM from '../../../test/dom';

describe('<Circle/>', () => {
	it('change with animation', () => {
		const { container, rerender } = render(<Circle progress={70}></Circle>);

		expect(container).toMatchSnapshot();

		rerender(<Circle progress={80}></Circle>);

		expect(container).toMatchSnapshot();
	});
	it('should change circle size when using size prop', () => {
		const { container } = render(
			<Circle size={300} progress={70}></Circle>,
		);

		expect(container).toMatchSnapshot();
	});

	it('Progress bar color, input object format can define gradient color', () => {
		const gradientColor = {
			'0%': '#3fecff',
			'100%': '#6149f6',
		};

		const { container } = render(
			<Circle
				className="Circle"
				progress={70}
				strokeColor={gradientColor}
			></Circle>,
		);

		expect(container).toMatchSnapshot();
	});
	it('should change stroke linecap when using stroke-linecap prop', () => {
		const { container } = render(
			<Circle strokeLinecap={'square'} progress={70}></Circle>,
		);

		expect(container).toMatchSnapshot();
	});

	it('should change gap position when using gapPosition prop', () => {
		const { container } = render(
			<>
				<Circle gapPosition="top" progress={70}></Circle>,
				<Circle gapPosition="bottom" progress={70}></Circle>,
				<Circle gapPosition="left" progress={70}></Circle>,
				<Circle gapPosition="right" progress={70}></Circle>,
			</>,
		);

		expect(container).toMatchSnapshot();
	});

	it('should change strokeColor between gradient and color string correctly', () => {
		const { container, rerender } = render(
			<Circle
				strokeColor={{
					'0%': '#3fecff',
					'100%': '#6149f6',
				}}
				progress={70}
			></Circle>,
		);

		const track = TestsDOM.mustQuerySelector(
			container,
			'.fnx-circle__hover',
		);

		expect((track as any).style.stroke).toBe('');

		rerender(<Circle strokeColor="red" progress={70}></Circle>);

		expect((track as any).style.stroke).toBe('red');

		rerender(
			<Circle
				strokeColor={{
					'0%': '#3fecff',
					'100%': '#6149f6',
				}}
				progress={70}
			></Circle>,
		);

		expect((track as any).style.stroke).toBe('');
	});
});
