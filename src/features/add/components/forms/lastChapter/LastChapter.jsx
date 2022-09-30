import Input from '../../../../../components/input/Input'
import SubmitButton from '../../../../../components/loadingButton/Button'
import { Container, BoxButtons, Back } from '../category/formStyles'

function LastChapterForm({ setStep, last, setLast, submit, response }) {
  const back = () => {
    if (response !== 'loading') setStep(prev => prev - 1)
  }

  return (
    <Container onSubmit={submit}>
      <Input
        label="Ultímo capítulo visto"
        required={true}
        disabled={response === 'loading'}
        value={last}
        onChange={e => setLast(e.target.value)}
      />

      <BoxButtons>
        <Back onClick={back}>Voltar</Back>
        <SubmitButton name="Registrar" loading={response === 'loading'} />
      </BoxButtons>
    </Container>
  )
}

export default LastChapterForm
