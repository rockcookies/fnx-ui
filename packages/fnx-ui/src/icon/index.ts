import _Icon from './Icon';
import { createFromIconfontCN } from './IconFont';
import IconSpinner from './IconSpinner';
import { IconComponent, IconExportExtra } from './interface';

const Icon: IconComponent & IconExportExtra = _Icon as any;
Icon.createFromIconfontCN = createFromIconfontCN;
Icon.Spinner = IconSpinner;

export type {
	IconProps,
	IconComponentProps,
	IconComponent,
	IconSpinnerProps,
	IconSpinnerComponentProps,
	IconSpinnerComponent,
} from './interface';

export default Icon;
