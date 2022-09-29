import SelectInput from '../../../../../components/selectInput/SelectInput'
import AutoComplete from '../../../../../components/autoComplete/AutoComplete'
import SubmitButton from '../../../../../components/loadingButton/Button'
import { Container } from './formStyles'

function CategoryForm({ setStep, category, setCategory, name, setName }) {
  const next = event => {
    event.preventDefault()

    setStep(prev => prev + 1)
  }

  return (
    <Container onSubmit={next}>
      <SelectInput
        label="Categoria"
        value={category}
        onChange={e => setCategory(e.target.value)}
      />
      <AutoComplete
        label="Nome"
        value={name}
        onChange={(e, newValue) => setName(newValue)}
      />

      <SubmitButton name="Próximo" />
    </Container>
  )
}

export default CategoryForm
