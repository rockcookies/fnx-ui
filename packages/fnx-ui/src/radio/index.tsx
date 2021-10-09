import _Radio from './Radio';
import RadioGroup from './RadioGroup';

import { RadioExportExtra } from './interface';

const Radio: typeof _Radio & RadioExportExtra = _Radio as any;
Radio.Group = RadioGroup;

export type {
	RadioComponentProps,
	RadioProps,
	RadioValue,
	RadioGroupComponentProps,
	RadioGroupProps,
} from './interface';

export default Radio;
