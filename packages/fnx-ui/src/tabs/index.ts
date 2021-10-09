import { TabsContext, TabsPanelContext } from './context';
import { TabsExportExtra } from './interface';
import _Tab from './Tabs';
import TabsPanel from './TabsPanel';

const Tabs: typeof _Tab & TabsExportExtra = _Tab as any;
Tabs.Context = TabsContext;
Tabs.Panel = TabsPanel;
Tabs.PanelContext = TabsPanelContext;

export default Tabs;
