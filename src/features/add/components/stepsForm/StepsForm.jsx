import { useState } from 'react'
import useApi from '../../../../hooks/useApi'
import request from '../../api/request'
import useToast from '../../../../hooks/useToast'
import useClean from '../../../../hooks/useClean'
import CategoryForm from '../forms/category/Form'
import DescriptionForm from '../forms/description/Form'
import LastChapterForm from '../forms/lastChapter/LastChapter'

export default function StepsForm({ step, setStep }) {
  const [category, setCategory] = useState('')
  const [name, setName] = useState('')
  const [synopsis, setSynopsis] = useState('')
  const [poster, setPoster] = useState('')
  const [lastSeen, setLastSeen] = useState('')
  const [response, fetch] = useApi()

  useToast(response)

  useClean(
    [setCategory, setName, setSynopsis, setPoster, setLastSeen],
    setStep,
    response
  )

  const submit = e => {
    e.preventDefault()

    const data = { category, name, synopsis, poster, lastSeen }

    data.lastSeen = Number(lastSeen)

    if (data.synopsis.trim() === '') data.synopsis = null

    if (data.poster.trim() === '') data.poster = null

    fetch(...request(data))
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
          sinopse={synopsis}
          setSinopse={setSynopsis}
          poster={poster}
          setPoster={setPoster}
        />
      )

    case 2:
      return (
        <LastChapterForm
          setStep={setStep}
          last={lastSeen}
          setLast={setLastSeen}
          submit={submit}
        />
      )

    default:
      return null
  }
}
