import React from 'react';
import { render } from '@testing-library/react';
import Space from '../index';
import Button from '../../button';

describe('<Space/>', () => {
	it('should render space', async () => {
		const { container } = render(
			<Space>
				<Button>Button</Button>
				<Button>Button</Button>
				<Button>Button</Button>
			</Space>,
		);

		const items =
			container.querySelectorAll<HTMLDivElement>('.fnx-space-item');

		expect(items[0].style.marginRight).toBe('8px');
		expect(items[1].style.marginRight).toBe('8px');
		expect(items[2].style.marginRight).toBe('');
	});

	it('should render vertical', async () => {
		const { container, getByTestId } = render(
			<Space direction="vertical" fill data-testid="space">
				<Button block>Button</Button>
				<Button block>Button</Button>
				<Button block>Button</Button>
			</Space>,
		);

		const space = getByTestId('space');
		expect(space.classList).toContain('fnx-space--vertical');

		const items =
			container.querySelectorAll<HTMLDivElement>('.fnx-space-item');
		expect(items[0].style.marginBottom).toBe('8px');
		expect(items[1].style.marginBottom).toBe('8px');
		expect(items[2].style.marginBottom).toBe('');
	});

	it('should render empty space', async () => {
		const { container } = render(<Space></Space>);

		expect(container).toMatchSnapshot();
	});

	it('should render size 20px', async () => {
		const { container } = render(
			<Space size={20}>
				<Button block>Button</Button>
				<Button block>Button</Button>
				<Button block>Button</Button>
			</Space>,
		);

		const items =
			container.querySelectorAll<HTMLDivElement>('.fnx-space-item');

		expect(items[0].style.marginRight).toBe('20px');
		expect(items[1].style.marginRight).toBe('20px');
		expect(items[2].style.marginRight).toBe('');
	});

	it('should render size 2rem', async () => {
		const { container } = render(
			<Space size={['2rem']}>
				<Button block>Button</Button>
				<Button block>Button</Button>
				<Button block>Button</Button>
			</Space>,
		);

		const items =
			container.querySelectorAll<HTMLDivElement>('.fnx-space-item');

		expect(items[0].style.marginRight).toBe('2rem');
		expect(items[1].style.marginRight).toBe('2rem');
		expect(items[2].style.marginRight).toBe('');
	});

	test('should render align start', async () => {
		const { getByTestId } = render(
			<Space align="start" data-testid="space">
				<Button block>Button</Button>
				<Button block>Button</Button>
				<Button block>Button</Button>
			</Space>,
		);

		const space = getByTestId('space');
		expect(space.classList).toContain('fnx-space--align-start');
	});

	test('should render wrap', async () => {
		const { getByTestId } = render(
			<Space wrap data-testid="space">
				<Button block>Button</Button>
				<Button block>Button</Button>
				<Button block>Button</Button>
				<Button block>Button</Button>
				<Button block>Button</Button>
				<Button block>Button</Button>
				<Button block>Button</Button>
				<Button block>Button</Button>
				<Button block>Button</Button>
			</Space>,
		);

		const space = getByTestId('space');
		expect(space.classList).toContain('fnx-space--wrap');
	});
});
