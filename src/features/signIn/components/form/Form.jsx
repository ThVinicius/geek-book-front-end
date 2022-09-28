import InputPassword from '../../../../components/inputPassword/Input'
import Input from '../../../../components/input/Input'
import SubmitButton from '../../../../components/loadingButton/Button'
import { Container, Anchor } from './formStyles'

export default function Form() {
  function submit(event) {
    event.preventDefault()
  }

  return (
    <Container onSubmit={submit}>
      <h1>Login</h1>
      <Input label="Email" type="email" />
      <InputPassword label="Senha" />
      <SubmitButton name="Logar" />
      <Anchor to="/signup">Não possuo cadastro</Anchor>
    </Container>
  )
}
