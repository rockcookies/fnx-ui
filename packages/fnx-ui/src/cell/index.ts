import _Cell from './Cell';
import CellGroup from './CellGroup';
import { CellExportExtra } from './interface';

const Cell: typeof _Cell & CellExportExtra = _Cell as any;

Cell.Group = CellGroup;

export type {
	CellGroupComponentProps,
	CellGroupProps,
	CellComponentProps,
	CellProps,
	CellItemsAlign,
} from './interface';

export default Cell;
