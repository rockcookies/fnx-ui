import { SwipeComponent, SwipeExportExtra } from './interface';
import _Swipe from './Swipe';
import SwipeItem from './SwipeItem';

const Swipe: SwipeComponent & SwipeExportExtra = _Swipe as any;
Swipe.Item = SwipeItem;

export type {
	SwipeComponentProps,
	SwipeComponent,
	SwipeProps,
	SwipeItemComponent,
	SwipeItemProps,
} from './interface';
export default Swipe;
