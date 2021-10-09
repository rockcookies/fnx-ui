import React from 'react';
import { render } from '@testing-library/react';
import Popup from '../index';

const Portal = Popup.Portal;

describe('<Popup.Portal/>', () => {
	it('renderOnShow', () => {
		function Demo({ foo = false, bar = false }) {
			return (
				<div>
					<Portal renderOnShow={true} mountTo={false} visible={foo}>
						<div className="foo"></div>
					</Portal>
					<Portal renderOnShow={false} mountTo={false} visible={bar}>
						<div className="bar"></div>
					</Portal>
				</div>
			);
		}

		const { container, rerender } = render(<Demo />);

		expect(container.querySelector('.foo')).toBeNull();
		expect(container.querySelector('.bar')).not.toBeNull();

		rerender(<Demo foo={true} bar={true} />);

		expect(container.querySelector('.foo')).not.toBeNull();
		expect(container.querySelector('.bar')).not.toBeNull();
	});

	it('destroyOnHide', () => {
		function Demo({ foo = true, bar = true }) {
			return (
				<div>
					<Portal
						renderOnShow={true}
						destroyOnHide={true}
						mountTo={false}
						visible={foo}
					>
						<div className="foo"></div>
					</Portal>
					<Portal
						renderOnShow={true}
						destroyOnHide={false}
						mountTo={false}
						visible={bar}
					>
						<div className="bar"></div>
					</Portal>
				</div>
			);
		}

		const { container, rerender } = render(<Demo />);

		expect(container.querySelector('.foo')).not.toBeNull();
		expect(container.querySelector('.bar')).not.toBeNull();

		rerender(<Demo foo={false} bar={false} />);

		expect(container.querySelector('.foo')).toBeNull();
		expect(container.querySelector('.bar')).not.toBeNull();
	});

	it('mountTo', () => {
		const foo = document.createElement('div');

		render(
			<Portal visible={true} mountTo={foo}>
				<div className="foo"></div>
			</Portal>,
		);

		expect(foo.querySelector('.foo')).not.toBeNull();

		const bar = document.createElement('div');

		render(
			<Portal visible={true} mountTo={() => bar}>
				<div className="bar"></div>
			</Portal>,
		);

		expect(bar.querySelector('.bar')).not.toBeNull();
	});
});
