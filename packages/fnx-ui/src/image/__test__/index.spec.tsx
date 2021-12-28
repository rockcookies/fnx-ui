import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Image from '../index';

const EXP_IMG = 'https://dummyimage.com/200x200/000/fff.jpg';

describe('<Image/>', () => {
	it('should show correctly when set width,height,src', () => {
		const { container } = render(
			<Image
				data-testid="image"
				width="100"
				height="100"
				src={EXP_IMG}
			/>,
		);

		expect(container).toMatchSnapshot();
	});

	it('should show fit and round style correctly', () => {
		const { container } = render(
			<Image
				data-testid="image"
				round
				fit="cover"
				width="100"
				height="100"
				src={EXP_IMG}
			/>,
		);

		expect(container).toMatchSnapshot();
	});

	it('should show border-radius when radius is set', () => {
		const { container } = render(
			<Image
				data-testid="image"
				radius="10"
				width="100%"
				height="27vw"
				src={EXP_IMG}
			/>,
		);

		expect(container).toMatchSnapshot();
	});
	it('should show alt tip when alt is set', () => {
		const { container } = render(
			<Image
				data-testid="image"
				alt="there is img alt"
				width="100%"
				height="27vw"
				src={EXP_IMG}
			/>,
		);

		expect(container).toMatchSnapshot();
	});

	it('should show define load render', () => {
		const { container } = render(
			<Image
				data-testid="image"
				width="100%"
				height="27vw"
				slots={{
					loading: 'Loading..',
				}}
			/>,
		);
		expect(container).toMatchSnapshot();
	});

	it('should trigger onLoad event', () => {
		const onLoad = jest.fn();

		const { getByTestId } = render(
			<Image
				data-testid="image"
				width="100%"
				height="27vw"
				src={EXP_IMG}
				onLoad={onLoad}
			/>,
		);

		//触发load
		fireEvent(getByTestId('image').children[0], new Event('load'));

		expect(onLoad).toHaveBeenCalled();
	});

	it('should show define error span and trigger onError', () => {
		const onError = jest.fn();

		const { getByTestId, container } = render(
			<Image
				data-testid="image"
				width="100%"
				height="27vw"
				src="x"
				onError={onError}
				slots={{
					error: 'Error',
				}}
			/>,
		);

		//触发error
		fireEvent(getByTestId('image').children[0], new ErrorEvent('error'));
		expect(onError).toHaveBeenCalled();
		expect(container).toMatchSnapshot();
	});

	it('should render loading placeholder when using lazy prop', () => {
		const { container } = render(<Image src={EXP_IMG} lazy />);

		expect(container).toMatchSnapshot();
	});
});
