import { PopupContext } from './context';
import useOnPopupOpen from './hooks/use-on-popup-open';
import { PopupComponent, PopupExportExtra } from './interface';
import _Popup from './Popup';
import PopupSelect from './PopupSelect';
import Portal from './Portal';

const Popup: PopupComponent & PopupExportExtra = _Popup as any;
Popup.Portal = Portal;
Popup.Select = PopupSelect;
Popup.Context = PopupContext;
Popup.useOnPopupOpen = useOnPopupOpen;

export type {
	PopupComponentProps,
	PopupContextData,
	PopupPosition,
	PopupProps,
	PopupSelectComponentProps,
	PopupSelectProps,
	PortalProps,
} from './interface';

export default Popup;
