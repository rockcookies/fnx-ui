import _Collapse from './Collapse';
import CollapseItem from './CollapseItem';
import { CollapseExportExtra } from './interface';

const Collapse: typeof _Collapse & CollapseExportExtra = _Collapse as any;
Collapse.Item = CollapseItem;

export type {
	CollapseComponentProps,
	CollapseProps,
	CollapseItemComponentProps,
	CollapseItemProps,
} from './interface';

export default Collapse;
