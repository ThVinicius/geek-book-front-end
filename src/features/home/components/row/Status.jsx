import { useRef, useState } from "react"
import useApi from "../../../../hooks/useApi"
import updateStatus from "../../api/updateStatus"
import useToast from "../../../../hooks/useToast"
import { useGlobal } from "../../../../context/globalContext"
import SelectInput from "../../../../components/selectInput/SelectInput"

const wait = false

export default function Status({ row }) {
  const statusValue = useRef({ id: row.status.id, name: row.status.name })
  const { global } = useGlobal()
  const [input, setInput] = useState(false)
  const [response, fetch] = useApi(wait)
  const [status, setStatus] = useState(statusValue.current)

  useToast(response)

  const key = event => {
    switch (event.key) {
      case "Enter":
        const data = { id: row.id, statusId: status.id }

        const newStatus = global.status.find(item => item.id === status.id)

        statusValue.current = newStatus

        fetch(...updateStatus(data))

        setInput(false)

        return

      case "Escape":
        setStatus(statusValue.current)

        setInput(false)
        return

      default:
        break
    }
  }

  const handleStatus = value => {
    const newStatus = global.status.find(item => item.id === value)

    setStatus(newStatus)
  }

  return input ? (
    <SelectInput
      onKeyUp={key}
      size="small"
      none={false}
      label="Status"
      options={global.status}
      value={status.id}
      onChange={e => handleStatus(e.target.value)}
    />
  ) : (
    <p onClick={() => setInput(true)}>{statusValue.current.name}</p>
  )
}
