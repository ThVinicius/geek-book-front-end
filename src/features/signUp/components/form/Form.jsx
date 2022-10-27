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

    let aux = avatar

    if (avatar.trim() === '') aux = null

    const data = { nickname, avatar: aux, email, password, confirmPassword }

    fetch(...request(data))
  }

  return (
    <Container onSubmit={submit}>
      <h1>Cadastro</h1>
      <Input
        dataCy="nickname"
        label="Nickname"
        value={nickname}
        onChange={e => setNickname(e.target.value)}
      />
      <Input
        dataCy="avatar"
        label="Avatar"
        type="url"
        required={false}
        value={avatar}
        onChange={e => setAvatar(e.target.value)}
      />
      <Input
        dataCy="email"
        label="Email"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <InputPassword
        dataCy="password"
        label="Senha"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <InputPassword
        dataCy="confirm password"
        label="Confirmar senha"
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
      />
      <SubmitButton
        dataCy="submit"
        name="Cadastrar"
        loading={response === 'loading'}
      />
      <Anchor to="/">Já possuo cadastro</Anchor>
    </Container>
  )
}
