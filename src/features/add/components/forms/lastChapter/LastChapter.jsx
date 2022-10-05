import { useEffect } from "react"
import { useGlobal } from "../../../../../context/globalContext"
import useApi from "../../../../../hooks/useApi"
import useHandleRequest from "../../../../../hooks/useHandleRequest"
import getStatus from "../../../api/getStatus"
import useToast from "../../../../../hooks/useToast"
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
  const [res, fetch] = useApi()
  const { global } = useGlobal()

  // useHandleRequest(res, setOptions)

  // useToast(res)

  // useEffect(() => {
  //   fetch(...getStatus())
  // }, [])

  const back = () => {
    if (response !== "loading") setStep(prev => prev - 1)
  }

  return (
    <Container onSubmit={submit}>
      <Input
        label="Ultímo capítulo visto"
        required={true}
        disabled={response === "loading"}
        value={last}
        onChange={e => setLast(e.target.value)}
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
