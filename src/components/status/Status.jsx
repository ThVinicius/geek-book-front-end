import { useState } from 'react'
import useApi from '../../hooks/useApi'
import updateStatus from './api/updateStatus'
import useToast from '../../hooks/useToast'
import { useGlobal } from '../../context/globalContext'
import SelectInput from '../selectInput/SelectInput'
import { Container, H6 } from './statusStyles'

const wait = false

export default function Status({ row, modify = true, setCollections }) {
  const { global } = useGlobal()
  const [input, setInput] = useState(false)
  const [response, fetch] = useApi(wait)
  const [status, setStatus] = useState(row.status)

  useToast(response)

  const key = event => {
    switch (event.key) {
      case 'Escape':
        setInput(false)
        return

      default:
        break
    }
  }

  const handleStatus = value => {
    const { id, name } = global.status.find(item => item.id === value)

    setStatus({ id, name })

    setCollections(prev =>
      prev.map(item => {
        if (item.id === row.id) return { ...item, status: { id, name } }

        return item
      })
    )

    const data = { id: row.id, statusId: id }

    fetch(...updateStatus(data))
  }

  const handleInput = () => {
    if (modify) setInput(true)
  }

  const onClose = event => {
    setInput(false)
  }

  return (
    <Container>
      {input ? (
        <SelectInput
          onKeyUp={key}
          size="small"
          autoWidth={true}
          focused={true}
          none={false}
          label="Status"
          options={global.status}
          value={status.id}
          onChange={e => handleStatus(e.target.value)}
          onClose={onClose}
        />
      ) : (
        <H6 onClick={handleInput}>
          {typeof row.status === 'string' ? row.status : status.name}
        </H6>
      )}
    </Container>
  )
}
