import _Icon from './Icon';
import { createFromIconfontCN } from './IconFont';
import IconSpinner from './IconSpinner';
import { IconExportExtra } from './interface';

const Icon: typeof _Icon & IconExportExtra = _Icon as any;
Icon.createFromIconfontCN = createFromIconfontCN;
Icon.Spinner = IconSpinner;

export type {
	IconCustomComponentProps,
	IconComponentProps,
	IconProps,
	IconSpinnerComponentProps,
	IconSpinnerProps,
} from './interface';

export default Icon;
