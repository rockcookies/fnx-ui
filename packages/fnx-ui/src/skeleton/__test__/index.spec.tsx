import React from 'react';
import { render } from '@testing-library/react';
import Skeleton from '../index';
import TestsDOM from '../../../test/dom';

describe('<Skeleton/>', () => {
	it('should render with row width array correctly', async () => {
		const { container } = render(
			<Skeleton rowWidth={['100%', 30, '5rem']} row={3} loading={true} />,
		);

		expect(container.querySelectorAll('.fnx-skeleton__row').length).toBe(3);
	});

	it('should render default slot when loading is false', async () => {
		const { container } = render(
			<Skeleton loading={false}>
				<div className="foo">Content</div>
			</Skeleton>,
		);

		expect(container.querySelector('.foo')).not.toBeNull();
	});

	it('should change avatar size when using avatar-size prop', async () => {
		const { container } = render(
			<Skeleton data-testid="skeleton" avatar={true} avatarSize="200px">
				<div className="foo">Content</div>
			</Skeleton>,
		);

		const track = TestsDOM.mustQuerySelector<HTMLElement>(
			container,
			'.fnx-skeleton__avatar',
		);

		expect(track.style.width).toMatchSnapshot('200px');
	});

	it('should change avatar shape when using avatar-shape prop', async () => {
		const { getByTestId } = render(
			<Skeleton
				data-testid="skeleton"
				avatar={true}
				avatarShape={'square'}
			>
				<div className="foo">Content</div>
			</Skeleton>,
		);

		expect(getByTestId('skeleton')).toMatchSnapshot();
	});

	it('should be round when using round prop', async () => {
		const { container } = render(
			<Skeleton
				data-testid="skeleton"
				avatar={true}
				title={true}
				row={3}
				round={true}
			>
				<div className="foo">Content</div>
			</Skeleton>,
		);

		const track = TestsDOM.mustQuerySelector(
			container,
			'.fnx-skeleton--round',
		);

		expect(track).not.toBeNull();
	});

	it('should allow to disable animation', async () => {
		const { container } = render(
			<>
				<Skeleton title={true} animate={true}></Skeleton>,
				<Skeleton title={true} animate={false}></Skeleton>,
			</>,
		);

		expect(container).toMatchSnapshot();
	});
});
