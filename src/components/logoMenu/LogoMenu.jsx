import Avatar from "@mui/material/Avatar"
import Logo from "../../assets/images/book-removebg-preview.png"
import { Container } from "./logoStyles"

export default function LogoMenu({ collapsed = false, color = "#FFF" }) {
  return (
    <Container color={color}>
      <Avatar alt="logo" src={Logo} />
      {!collapsed && (
        <h1>
          Geek<span>Book</span>
        </h1>
      )}
    </Container>
  )
}
