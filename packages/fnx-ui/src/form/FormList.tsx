import { List } from 'rc-field-form';
import React from 'react';
import { devWarning } from '../utils/misc';
import { createFC } from '../utils/react';
import { FormListProps } from './interface';

const FormList = createFC<FormListProps>('FormList', (props) => {
	devWarning(!!props.name, 'Form.List', 'Miss `name` prop.');

	return <List {...props} />;
});

export default FormList;
