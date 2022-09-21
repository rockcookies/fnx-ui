import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import Tag from '../index';
import TestsDOM from '../../../test/dom';

describe('<Tag>', () => {
	beforeEach(() => {
		jest.useFakeTimers();
	});

	afterEach(() => {
		jest.useRealTimers();
	});
	it('should emit close event when clicking the close icon', () => {
		const onClose = jest.fn();

		const { container } = render(
			<Tag closeable onClose={onClose}>
				closeable
			</Tag>,
		);

		const track = TestsDOM.mustQuerySelector(container, '.fnx-tag__close');

		fireEvent.click(track);

		expect(onClose).toHaveBeenCalled();
	});

	it('should emit close event when clicking the close icon', () => {
		const onClose = jest.fn();

		const { container } = render(
			<Tag closeable onClose={onClose}>
				closeable
			</Tag>,
		);

		const track = TestsDOM.mustQuerySelector(container, '.fnx-tag__close');

		fireEvent.click(track);

		expect(onClose).toHaveBeenCalled();
	});

	it('when the theme is plain', () => {
		const { container } = render(<Tag theme="plain"></Tag>);

		expect(container).toMatchSnapshot();
	});
	it('transitionDuration', () => {
		const { container } = render(<Tag transitionDuration={100}></Tag>);

		expect(container).toMatchSnapshot();
	});

	it('can be controlled by visible with hidden as initial value', () => {
		const { container, rerender } = render(
			<Tag visible={true}>switch</Tag>,
		);

		expect(container).toMatchSnapshot();

		rerender(<Tag visible={false}>switch</Tag>);

		act(() => {
			jest.runAllTimers();
		});

		expect(container).toMatchSnapshot();

		rerender(<Tag visible={true}>switch</Tag>);

		act(() => {
			jest.runAllTimers();
		});

		expect(container).toMatchSnapshot();
	});
});
