import { useGlobal } from "../../../../../context/globalContext"
import Input from "../../../../../components/input/Input"
import SelectInput from "../../../../../components/selectInput/SelectInput"
import SubmitButton from "../../../../../components/loadingButton/Button"
import { Container, BoxButtons, Back } from "../category/formStyles"

function LastChapterForm({
  setStep,
  last,
  setLast,
  submit,
  response,
  status,
  setStatus
}) {
  const { global } = useGlobal()

  const back = () => {
    if (response !== "loading") setStep(prev => prev - 1)
  }

  const handleLast = target => {
    if (target.validity.valid || target.value === "") setLast(target.value)
  }

  return (
    <Container onSubmit={submit}>
      <Input
        label="Ultímo capítulo visto"
        required={true}
        number={true}
        disabled={response === "loading"}
        value={last}
        onChange={e => handleLast(e.target)}
        width="250px"
      />
      <SelectInput
        label="Status"
        options={global.status}
        none={false}
        value={status}
        onChange={e => setStatus(e.target.value)}
      />
      <BoxButtons>
        <Back onClick={back}>Voltar</Back>
        <SubmitButton name="Registrar" loading={response === "loading"} />
      </BoxButtons>
    </Container>
  )
}

export default LastChapterForm
