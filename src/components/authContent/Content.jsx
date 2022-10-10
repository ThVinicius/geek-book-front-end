import { Container, H1 } from "./contentStyles"
import Logo from "../logo/Logo"

export default function Content({ children }) {
  return (
    <>
      <Container className="logo-desktop">
        <Logo />
        <H1>
          Gerencie seus mangás, anímes, séries, novels e compartilhe com seus
          amigos
        </H1>
      </Container>
      <Container>
        <Logo className="logo-mobile" />
        {children}
      </Container>
    </>
  )
}
