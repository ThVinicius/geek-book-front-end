import { Container } from './contentStyles'
import Logo from '../logo/Logo'

export default function Content({ children }) {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>{children}</Container>
    </>
  )
}
