import { useState } from 'react'
import useApi from '../../../../hooks/useApi'
import request from '../../api/request'
import useToast from '../../../../hooks/useToast'
import useClean from '../../../../hooks/useClean'
import CategoryForm from '../forms/category/Form'
import DescriptionForm from '../forms/description/Form'
import LastChapterForm from '../forms/lastChapter/LastChapter'

export default function StepsForm({ step, setStep }) {
  const [categoryId, setCategoryId] = useState('')
  const [name, setName] = useState('')
  const [synopsis, setSynopsis] = useState('')
  const [poster, setPoster] = useState('')
  const [lastSeen, setLastSeen] = useState('')
  const [statusId, setStatusId] = useState(1)
  const [publicValue, setPublicValue] = useState(true)
  const [response, fetch] = useApi()
  const [options, setOptions] = useState([])

  useToast(response)

  useClean(
    [setCategoryId, setName, setSynopsis, setPoster, setLastSeen],
    setStep,
    response
  )

  const submit = e => {
    e.preventDefault()

    const data = { categoryId, name, synopsis, poster, lastSeen, statusId }

    data.categoryId = Number(categoryId)
    data.lastSeen = Number(lastSeen)

    data.publicValue = publicValue

    if (data.synopsis.trim() === '') data.synopsis = null

    if (data.poster.trim() === '') data.poster = null

    fetch(...request(data))
  }

  switch (step) {
    case 0:
      return (
        <CategoryForm
          setStep={setStep}
          category={categoryId}
          setCategory={setCategoryId}
          name={name}
          setName={setName}
          options={options}
          setOptions={setOptions}
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
          options={options}
          name={name}
        />
      )

    case 2:
      return (
        <LastChapterForm
          setStep={setStep}
          last={lastSeen}
          setLast={setLastSeen}
          status={statusId}
          setStatus={setStatusId}
          publicValue={publicValue}
          setPublicValue={setPublicValue}
          submit={submit}
          response={response}
        />
      )

    default:
      return null
  }
}
