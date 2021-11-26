import { SwipeExportExtra } from './interface';
import _Swipe from './Swipe';
import SwipeItem from './SwipeItem';

const Swipe: typeof _Swipe & SwipeExportExtra = _Swipe as any;
Swipe.Item = SwipeItem;

export type {
	SwipeComponentProps,
	SwipeItemProps,
	SwipeProps,
} from './interface';
export default Swipe;
