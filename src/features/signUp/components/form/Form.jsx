import { useState } from 'react'
import useApi from '../../../../hooks/useApi'
import request from '../../api/request'
import useToast from '../../../../hooks/useToast'
import InputPassword from '../../../../components/inputPassword/Input'
import Input from '../../../../components/input/Input'
import SubmitButton from '../../../../components/loadingButton/Button'
import { Container, Anchor } from './formStyles'

export default function Form() {
  const [nickname, setNickname] = useState('')
  const [avatar, setAvatar] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [response, fetch] = useApi()

  useToast(response)

  function submit(event) {
    event.preventDefault()

    const data = { nickname, avatar, email, password, confirmPassword }

    fetch(...request(data))
  }

  return (
    <Container onSubmit={submit}>
      <h1>Cadastro</h1>
      <Input
        label="Nickname"
        value={nickname}
        onChange={e => setNickname(e.target.value)}
      />
      <Input
        label="Avatar"
        type="url"
        required={false}
        value={avatar}
        onChange={e => setAvatar(e.target.value)}
      />
      <Input
        label="Email"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <InputPassword
        label="Senha"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <InputPassword
        label="Confirmar senha"
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
      />
      <SubmitButton name="Cadastrar" />
      <Anchor to="/signin">Já possuo cadastro</Anchor>
    </Container>
  )
}
