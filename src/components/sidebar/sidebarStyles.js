import styled from 'styled-components'
import { SidebarHeader, SidebarFooter } from 'react-pro-sidebar'

const Header = styled(SidebarHeader)`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  h1 {
    font: normal 700 28px 'Lexend', sans-serif;
    color: #ffffff;
  }

  span {
    color: #3f61d7;
  }
`
const Footer = styled(SidebarFooter)`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`

const Logout = styled.p`
  font: normal 700 18px 'Lexend', sans-serif;
  cursor: pointer;
`

export { Header, Footer, Logout }
