import { useState } from 'react'
import CategoryForm from '../forms/category/Form'
import DescriptionForm from '../forms/description/Form'
import LastChapterForm from '../forms/lastChapter/LastChapter'

export default function StepsForm({ step, setStep }) {
  const [category, setCategory] = useState('')
  const [name, setName] = useState('')
  const [sinopse, setSinopse] = useState('')
  const [poster, setPoster] = useState('')
  const [last, setLast] = useState('')

  const submit = e => {
    e.preventDefault()

    const data = { category, name, sinopse, poster, last }

    console.log(data)
  }

  switch (step) {
    case 0:
      return (
        <CategoryForm
          setStep={setStep}
          category={category}
          setCategory={setCategory}
          name={name}
          setName={setName}
        />
      )

    case 1:
      return (
        <DescriptionForm
          setStep={setStep}
          sinopse={sinopse}
          setSinopse={setSinopse}
          poster={poster}
          setPoster={setPoster}
        />
      )

    case 2:
      return (
        <LastChapterForm
          setStep={setStep}
          last={last}
          setLast={setLast}
          submit={submit}
        />
      )

    default:
      return null
  }
}
