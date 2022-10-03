import { useEffect, useState } from 'react'
import Input from '../../../../../components/input/Input'
import SubmitButton from '../../../../../components/loadingButton/Button'
import { Container, BoxButtons, Back } from '../category/formStyles'

export default function DescriptionForm({
  setStep,
  sinopse,
  setSinopse,
  poster,
  setPoster,
  options,
  name
}) {
  const [find, setFind] = useState(false)

  useEffect(() => {
    const find = options.find(collection => collection.name === name)

    if (find && find.synopsis !== null && find.poster !== null) {
      setSinopse(find.synopsis)

      setPoster(find.poster)

      setFind(true)
    }
  }, [])

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
        disabled={find}
        multiline={true}
        value={sinopse}
        onChange={e => setSinopse(e.target.value)}
      />
      <Input
        label="Poster"
        type="url"
        required={false}
        disabled={find}
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
