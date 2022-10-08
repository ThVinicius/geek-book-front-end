import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { SidebarContent, Menu, MenuItem } from "react-pro-sidebar"
import "react-pro-sidebar/dist/css/styles.css"
import { useGlobal } from "../../context/globalContext"
import useLogout from "../../hooks/useLogout"
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd"
import AutoStoriesIcon from "@mui/icons-material/AutoStories"
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck"
import ShareIcon from "@mui/icons-material/Share"
import Avatar from "@mui/material/Avatar"
import { Header, Footer, Logout, Container } from "./sidebarStyles"
import Logo from "../../assets/images/book-removebg-preview.png"
import rukia from "../../assets/images/rukia-bleach.jpeg"
import ShareDialog from "../shareDialog/ShareDialog"

export default function Sidebar() {
  const { global, setGlobal } = useGlobal()
  const [collapsed, setCollapsed] = useState(true)
  const { logout } = useLogout()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const userStringfy = localStorage.getItem("user")

    if (global.user === null && userStringfy !== null) {
      const { token, ...user } = JSON.parse(userStringfy)

      setGlobal({ ...global, token, user })
    }
  }, [])

  return (
    <>
      <Container collapsed={collapsed} width="210px" image={rukia}>
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
              Ativos
              <Link to="/home" />
            </MenuItem>
            <MenuItem icon={<LibraryAddCheckIcon />}>
              Completos
              <Link to="/complete" />
            </MenuItem>
            <MenuItem icon={<BookmarkAddIcon />}>
              Adicionar
              <Link to="/add" />
            </MenuItem>
            <MenuItem onClick={() => setOpen(true)} icon={<ShareIcon />}>
              Compartilhar
            </MenuItem>
          </Menu>
        </SidebarContent>
        <Footer onClick={() => setCollapsed(prev => !prev)}>
          <Avatar alt="avatar" src={global.user?.avatar} />
          {!collapsed && <Logout onClick={logout}>Logout</Logout>}
        </Footer>
      </Container>
      <ShareDialog open={open} setOpen={setOpen} />
    </>
  )
}
