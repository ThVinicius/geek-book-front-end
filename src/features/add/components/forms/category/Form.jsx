import { useEffect, useState } from 'react'
import useApi from '../../../../../hooks/useApi'
import request from '../../../api/getCategories'
import useHandleRequest from '../../../../../hooks/useHandleRequest'
import SelectInput from '../../../../../components/selectInput/SelectInput'
import AutoComplete from '../../../../../components/autoComplete/AutoComplete'
import SubmitButton from '../../../../../components/loadingButton/Button'
import { Container } from './formStyles'

function CategoryForm({ setStep, category, setCategory, name, setName }) {
  const [categories, setCategories] = useState(null)
  const [response, fetch] = useApi()

  useEffect(() => {
    fetch(...request())
  }, [])

  useHandleRequest(response, setCategories)

  const next = event => {
    event.preventDefault()

    setStep(prev => prev + 1)
  }

  return (
    <Container onSubmit={next}>
      <SelectInput
        label="Categoria"
        options={categories}
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
