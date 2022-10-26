import { useEffect, useRef, useState } from "react"
import usePersistence from "../../../../../hooks/usePersistence"
import useApi from "../../../../../hooks/useApi"
import request from "../../../api/getCategories"
import useHandleRequest from "../../../../../hooks/useHandleRequest"
import SelectInput from "../../../../../components/selectInput/SelectInput"
import AutoComplete from "../../../../../components/autoComplete/AutoComplete"
import SubmitButton from "../../../../../components/loadingButton/Button"
import { Container } from "./formStyles"
import { Glass } from "../../../../../components/spinner/Spinners"

export default function CategoryForm({
  setStep,
  category,
  setCategory,
  name,
  setName,
  options,
  setOptions
}) {
  const { loginPersistence } = usePersistence()
  const fetchNames = useRef(false)
  const [categories, setCategories] = useState(null)
  const [response, fetch] = useApi()

  useEffect(() => {
    loginPersistence()

    fetch(...request())
  }, [])

  useHandleRequest(response, setCategories)

  const next = event => {
    event.preventDefault()

    setStep(prev => prev + 1)
  }

  const handleCategory = value => {
    fetchNames.current = true

    setCategory(value)
  }

  return (
    <Container onSubmit={next}>
      {categories ? (
        <>
          <SelectInput
            label="Categoria"
            options={categories}
            value={category}
            onChange={e => handleCategory(e.target.value)}
          />
          <AutoComplete
            label="Nome"
            category={category}
            options={options}
            setOptions={setOptions}
            loading={fetchNames.current}
            value={name}
            onChange={(e, newValue) => setName(newValue)}
          />

          <SubmitButton name="Próximo" />
        </>
      ) : (
        <Glass />
      )}
    </Container>
  )
}
