import { PopupComponent, PopupExportExtra } from './interface';
import _Popup from './Popup';
import PopupSelect from './PopupSelect';
import Portal from './Portal';

const Popup: PopupComponent & PopupExportExtra = _Popup as any;
Popup.Portal = Portal;
Popup.Select = PopupSelect;

export type {
	PopupComponentProps,
	PopupProps,
	PopupSelectComponentProps,
	PopupSelectProps,
	PortalProps,
	PopupPosition,
} from './interface';

export default Popup;
