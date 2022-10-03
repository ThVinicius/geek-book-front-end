import { Container } from './contentStyles'
import Logo from '../logo/Logo'

export default function Content({ children }) {
  return (
    <>
      <Container className="logo-desktop">
        <Logo />
      </Container>
      <Container>
        <Logo className="logo-mobile" />
        {children}
      </Container>
    </>
  )
}
