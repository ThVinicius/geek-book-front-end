import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ProSidebar, SidebarContent, Menu, MenuItem } from 'react-pro-sidebar'
import 'react-pro-sidebar/dist/css/styles.css'
import { useGlobal } from '../../context/globalContext'
import useLogout from '../../hooks/useLogout'
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd'
import AutoStoriesIcon from '@mui/icons-material/AutoStories'
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck'
import Avatar from '@mui/material/Avatar'
import { Header, Footer, Logout } from './sidebarStyles'
import Logo from '../../assets/images/book-removebg-preview.png'
import rukia from '../../assets/images/rukia-bleach.jpeg'

export default function Sidebar() {
  const { global, setGlobal } = useGlobal()
  const [collapsed, setCollapsed] = useState(true)
  const { logout } = useLogout()

  useEffect(() => {
    const userStringfy = localStorage.getItem('user')

    if (global.user === null && userStringfy !== null) {
      const { token, ...user } = JSON.parse(userStringfy)

      setGlobal({ ...global, token, user })
    }
  }, [])

  return (
    <ProSidebar collapsed={collapsed} width="190px" image={rukia}>
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
          <MenuItem icon={<LibraryAddCheckIcon />}>
            Completos
            <Link to="/complete" />
          </MenuItem>
        </Menu>
      </SidebarContent>
      <Footer onClick={() => setCollapsed(prev => !prev)}>
        <Avatar alt="avatar" src={global.user?.avatar} />
        {!collapsed && <Logout onClick={logout}>Logout</Logout>}
      </Footer>
    </ProSidebar>
  )
}
