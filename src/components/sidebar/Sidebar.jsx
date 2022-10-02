import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ProSidebar, SidebarContent, Menu, MenuItem } from 'react-pro-sidebar'
import 'react-pro-sidebar/dist/css/styles.css'
import { useGlobal } from '../../context/globalContext'
import useLogout from '../../hooks/useLogout'
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd'
import AutoStoriesIcon from '@mui/icons-material/AutoStories'
import Avatar from '@mui/material/Avatar'
import { Header, Footer, Logout } from './sidebarStyles'
import Logo from '../../assets/images/book-removebg-preview.png'

export default function Sidebar() {
  const { global } = useGlobal()
  const [collapsed, setCollapsed] = useState(true)
  const { logout } = useLogout()

  return (
    <ProSidebar collapsed={collapsed} width="180px">
      <Header onClick={() => setCollapsed(prev => !prev)}>
        <Avatar alt="logo" src={Logo} />
        {!collapsed && (
          <h1>
            Geek<span>Book</span>
          </h1>
        )}
      </Header>
      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem icon={<AutoStoriesIcon />}>
            Coleção
            <Link to="/home" />
          </MenuItem>
          <MenuItem icon={<BookmarkAddIcon />}>
            Adicionar
            <Link to="/add" />
          </MenuItem>
        </Menu>
      </SidebarContent>
      <Footer onClick={() => setCollapsed(prev => !prev)}>
        <Avatar alt="avatar" src={global.user.avatar} />
        {!collapsed && <Logout onClick={logout}>Logout</Logout>}
      </Footer>
    </ProSidebar>
  )
}
