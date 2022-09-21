import _Radio from './Radio';
import InternalRadioGroup from './RadioGroup';

import { RadioExportExtra } from './interface';

const Radio: typeof _Radio & RadioExportExtra = _Radio as any;
Radio.Group = InternalRadioGroup;

export type {
	RadioComponentProps,
	RadioProps,
	RadioGroupComponentProps,
	RadioGroupProps,
	RadioValue,
} from './interface';

export default Radio;
