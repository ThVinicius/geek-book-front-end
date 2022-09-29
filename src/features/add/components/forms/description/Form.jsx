import Input from '../../../../../components/input/Input'
import SubmitButton from '../../../../../components/loadingButton/Button'
import { Container, BoxButtons, Back } from '../category/formStyles'

function DescriptionForm({ setStep, sinopse, setSinopse, poster, setPoster }) {
  const next = e => {
    e.preventDefault()

    setStep(prev => prev + 1)
  }

  const back = () => setStep(prev => prev - 1)

  return (
    <Container onSubmit={next}>
      <Input
        label="Sinopse"
        required={false}
        multiline={true}
        value={sinopse}
        onChange={e => setSinopse(e.target.value)}
      />
      <Input
        label="Poster"
        type="url"
        required={false}
        value={poster}
        onChange={e => setPoster(e.target.value)}
      />

      <BoxButtons>
        <Back onClick={back}>Voltar</Back>
        <SubmitButton name="Próximo" />
      </BoxButtons>
    </Container>
  )
}

export default DescriptionForm
