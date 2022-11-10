import { useState } from 'react'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn'
import useApi from '../../../../hooks/useApi'
import request from '../../api/request'
import useToast from '../../../../hooks/useToast'
import InputPassword from '../../../../components/inputPassword/Input'
import Input from '../../../../components/input/Input'
import SubmitButton from '../../../../components/loadingButton/Button'
import { Container, Anchor, ButtonsBox, Back } from './formStyles'

export default function Form({ setSelected }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [response, fetch] = useApi()

  useToast(response)

  function submit(event) {
    event.preventDefault()

    const data = { email, password }

    fetch(...request(data))
  }

  return (
    <Container onSubmit={submit}>
      <h1>Login</h1>
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
      <ButtonsBox>
        <Back onClick={() => setSelected(null)}>
          <KeyboardReturnIcon />
          VOLTAR
        </Back>
        <SubmitButton
          dataCy="submit"
          name="Logar"
          loading={response === 'loading'}
        />
      </ButtonsBox>
      <Anchor data-cy="signUp link" to="/signup">
        Não possuo cadastro
      </Anchor>
    </Container>
  )
}
