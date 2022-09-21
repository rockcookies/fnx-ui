import { List } from 'rc-field-form';
import React, { FC } from 'react';
import { devWarning } from '../utils/misc';
import { FormListProps } from './interface';

const FormList: FC<FormListProps> = (props) => {
	devWarning(!!props.name, 'Form.List', 'Miss `name` prop.');

	return <List {...props} />;
};

FormList.displayName = 'FormList';

export default FormList;
