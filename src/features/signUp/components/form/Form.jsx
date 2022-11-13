import { useState } from 'react'
import useApi from '../../../../hooks/useApi'
import request from '../../api/request'
import useToast from '../../../../hooks/useToast'
import useWindowResize from '../../../../hooks/useWindowResize'
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
  const { height } = useWindowResize()
  const [response, fetch] = useApi()

  useToast(response)

  function submit(event) {
    event.preventDefault()

    const data = { nickname, avatar, email, password, confirmPassword }

    if (avatar.trim() === '') data.avatar = null

    fetch(...request(data))
  }

  return (
    <Container onSubmit={submit}>
      <h1>Cadastro</h1>
      <Input
        dataCy="nickname"
        label="Nickname"
        size={height <= 420 ? 'small' : 'medium'}
        value={nickname}
        onChange={e => setNickname(e.target.value)}
      />
      <Input
        dataCy="avatar"
        label="Avatar"
        type="url"
        size={height <= 420 ? 'small' : 'medium'}
        required={false}
        value={avatar}
        onChange={e => setAvatar(e.target.value)}
      />
      <Input
        dataCy="email"
        label="Email"
        type="email"
        size={height <= 420 ? 'small' : 'medium'}
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <InputPassword
        dataCy="password"
        label="Senha"
        size={height <= 420 ? 'small' : 'medium'}
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <InputPassword
        dataCy="confirm password"
        label="Confirmar senha"
        size={height <= 420 ? 'small' : 'medium'}
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
      />
      <SubmitButton
        dataCy="submit"
        name="Cadastrar"
        size={height <= 420 ? 'small' : 'medium'}
        loading={response === 'loading'}
      />
      <Anchor to="/">Já possuo cadastro</Anchor>
    </Container>
  )
}
