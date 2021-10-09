import _Grid from './Grid';
import GridItem from './GridItem';
import { GridExportExtra } from './interface';

const Grid: typeof _Grid & GridExportExtra = _Grid as any;

Grid.Item = GridItem;

export default Grid;
