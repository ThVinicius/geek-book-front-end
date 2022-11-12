import { useState } from 'react'
import useApi from '../../../../hooks/useApi'
import useToast from '../../../../hooks/useToast'
import signUpOath from '../../api/signUpOauth'
import Input from '../../../../components/input/Input'
import SubmitButton from '../../../../components/loadingButton/Button'
import { Container, Box } from './formStyles'

export default function Form() {
  const [nickname, setNickname] = useState('')
  const [response, post] = useApi()

  useToast(response)

  const submit = event => {
    event.preventDefault()

    post(...signUpOath({ nickname }))
  }

  return (
    <Container onSubmit={submit}>
      <h2>Para finalizar seu cadastro precisamos de um nickname único!</h2>
      <Box>
        <Input
          label="nickname"
          disabled={response === 'loading'}
          value={nickname}
          onChange={e => setNickname(e.target.value)}
        />
        <SubmitButton name="Enviar" loading={response === 'loading'} />
      </Box>
    </Container>
  )
}
