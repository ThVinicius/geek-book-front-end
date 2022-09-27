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
      <h1>Cadastro</h1>
      <Input label="Nickname" />
      <Input label="Avatar" type="url" required={false} />
      <Input label="Email" type="email" />
      <InputPassword label="Senha" />
      <InputPassword label="Confirmar senha" />
      <SubmitButton name="Cadastrar" />
      <Anchor to="/signin">Já possuo cadastro</Anchor>
    </Container>
  )
}
