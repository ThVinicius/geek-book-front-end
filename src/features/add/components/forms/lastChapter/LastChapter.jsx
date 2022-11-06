import Tooltip from '@mui/material/Tooltip'
import { useGlobal } from '../../../../../context/globalContext'
import Input from '../../../../../components/input/Input'
import SelectInput from '../../../../../components/selectInput/SelectInput'
import SubmitButton from '../../../../../components/loadingButton/Button'
import { Container, BoxButtons, Back } from '../category/formStyles'
import { InputBox, Help, HelpText } from './lastStyles'

export default function LastChapterForm({
  setStep,
  last,
  setLast,
  submit,
  response,
  status,
  setStatus,
  publicValue,
  setPublicValue
}) {
  const { global } = useGlobal()

  const back = () => {
    if (response !== 'loading') setStep(prev => prev - 1)
  }

  const handleLast = target => {
    if (target.validity.valid || target.value === '') setLast(target.value)
  }

  return (
    <Container onSubmit={submit}>
      <Input
        label="Ultímo capítulo visto"
        required={true}
        number={true}
        disabled={response === 'loading'}
        value={last}
        onChange={e => handleLast(e.target)}
        width="250px"
      />
      <InputBox>
        <SelectInput
          label="Status"
          options={global.status}
          none={false}
          value={status}
          onChange={e => setStatus(e.target.value)}
        />
        <Tooltip title={helpTextStatus()} placement="top" arrow={true}>
          <Help />
        </Tooltip>
      </InputBox>
      <InputBox>
        <SelectInput
          label="Visualização"
          options={vizualizationOptions()}
          none={false}
          value={publicValue}
          onChange={e => setPublicValue(e.target.value)}
        />
        <Tooltip title={helpTextVisualization()} placement="top" arrow={true}>
          <Help />
        </Tooltip>
      </InputBox>
      <BoxButtons>
        <Back onClick={back}>Voltar</Back>
        <SubmitButton name="Registrar" loading={response === 'loading'} />
      </BoxButtons>
    </Container>
  )
}

function vizualizationOptions() {
  return [
    { id: true, name: 'Público' },
    { id: false, name: 'Privado' }
  ]
}

function helpTextVisualization() {
  const text =
    'Público: Ficara visível em sua lista compartilhada.\n\nPrivado: Não ficará visível em sua lista compartilhada (caso ela esteja no ranking aquela posição ficara vazia).'

  return <HelpText>{text}</HelpText>
}

function helpTextStatus() {
  const text =
    'Ativo: "Estou lendo/assistindo".\n\nCompleta: "Já terminei de ler/assistir".'

  return <HelpText>{text}</HelpText>
}
