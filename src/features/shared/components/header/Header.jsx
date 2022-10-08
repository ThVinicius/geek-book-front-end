import { Link } from "react-router-dom"
import Avatar from "@mui/material/Avatar"
import { Container, UserContainer } from "./headerStyles"
import Logo from "../../../../components/logo/Logo"

export default function Header({ collections }) {
  return (
    <Container>
      <Link to="/">
        <Logo />
      </Link>
      {collections && (
        <UserContainer>
          <p>Você está vendo a lista do(a) {collections.nickname}</p>
          <Avatar alt="avatar" src={collections.avatar} />
        </UserContainer>
      )}
    </Container>
  )
}
