import { Container } from './contentStyles'
import Logo from '../../../../components/logo/Logo'
import Form from '../form/Form'

export default function Content() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Form />
      </Container>
    </>
  )
}
