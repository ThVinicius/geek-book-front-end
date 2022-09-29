import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ProSidebar,
  SidebarContent,
  Menu,
  MenuItem,
  SubMenu
} from 'react-pro-sidebar'
import 'react-pro-sidebar/dist/css/styles.css'
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import Avatar from '@mui/material/Avatar'
import { Header } from './sidebarStyles'

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name)
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
  }
}

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(true)

  return (
    <ProSidebar collapsed={collapsed}>
      <Header>
        <Avatar onClick={() => setCollapsed(prev => !prev)} />
      </Header>
      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem icon={<BookmarkAddIcon />}>
            <Link to="/add">Adicionar</Link>
          </MenuItem>
          <SubMenu title="Components" icon={<AccessAlarmIcon />}>
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>
    </ProSidebar>
  )
}
