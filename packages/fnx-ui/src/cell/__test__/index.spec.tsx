import { render } from '@testing-library/react';
import React from 'react';
import Cell from '../../cell/index';
import Icon from '../../icon/index';

describe('<Cell/>', () => {
	it('should render correctly', async () => {
		const { container } = render(
			<Cell
				title="title"
				titleProps={{ role: 'title', className: 'title-class' }}
				contentProps={{ role: 'content', className: 'content-class' }}
				description="description"
				descriptionProps={{
					role: 'description',
					className: 'description-class',
				}}
				leftIcon={<Icon name="success" />}
				leftIconProps={{
					role: 'left-icon',
					className: 'left-icon-class',
				}}
				rightIcon={<Icon name="fail" />}
				rightIconProps={{
					role: 'right-icon',
					className: 'right-icon-class',
				}}
				border={false}
				itemsAlign="bottom"
				className="class"
			>
				children
			</Cell>,
		);

		expect(container).toMatchSnapshot();
	});
});
