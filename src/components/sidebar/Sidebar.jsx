import {
  ProSidebar,
  SidebarHeader,
  Menu,
  MenuItem,
  SubMenu
} from 'react-pro-sidebar'
import 'react-pro-sidebar/dist/css/styles.css'
import AcUnitIcon from '@mui/icons-material/AcUnit'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'

export default function Sidebar() {
  return (
    <ProSidebar collapsed={true}>
      <SidebarHeader>Menu</SidebarHeader>
      <Menu iconShape="circle">
        <MenuItem icon={<AcUnitIcon />}>Dashboard</MenuItem>
        <SubMenu title="Components" icon={<AccessAlarmIcon />}>
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 2</MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>
  )
}
