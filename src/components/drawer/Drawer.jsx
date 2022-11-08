import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useGlobal } from '../../context/globalContext'
import useWindowResize from '../../hooks/useWindowResize'
import useLogout from '../../hooks/useLogout'
import Drawer from '@mui/material/Drawer'
import Avatar from '@mui/material/Avatar'
import LogoMenu from '../logoMenu/LogoMenu'
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd'
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck'
import ShareIcon from '@mui/icons-material/Share'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import ShareDialog from '../shareDialog/ShareDialog'
import { Container, Header, List, Footer, Logout, Content } from './drawerStyle'

export default function TemporaryDrawer({ open, setOpen }) {
  const windowSize = useWindowResize()
  const { logout } = useLogout()
  const [dialog, setDialog] = useState(false)
  const { global, setGlobal } = useGlobal()

  useEffect(() => {
    const userStringfy = localStorage.getItem('user')

    if (global.user === null && userStringfy !== null) {
      const { token, ...user } = JSON.parse(userStringfy)

      setGlobal({ ...global, token, user })
    }
  }, [])

  return (
    windowSize.width <= 420 && (
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Container>
          <Header>
            <LogoMenu color="#000" />
          </Header>
          <Content>
            <List>
              <BookmarkAddIcon />
              <Link to="/active">Ativos</Link>
            </List>
            <List>
              <LibraryAddCheckIcon />
              <Link to="/complete">Completos</Link>
            </List>
            <List>
              <BookmarkAddIcon />
              <Link to="/add">Adicionar</Link>
            </List>
            <List>
              <EmojiEventsIcon />
              <Link to="/ranking">Ranking</Link>
            </List>
            <List onClick={() => setDialog(true)}>
              <ShareIcon />
              Compartilhar
            </List>
          </Content>
          <Footer>
            <Avatar alt="avatar" src={global.user?.avatar} />
            <Logout onClick={logout}>Logout</Logout>
          </Footer>
        </Container>
        <ShareDialog open={dialog} setOpen={setDialog} />
      </Drawer>
    )
  )
}
