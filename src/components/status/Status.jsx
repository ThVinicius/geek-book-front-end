import { useRef, useState } from "react"
import useApi from "../../hooks/useApi"
import updateStatus from "./api/updateStatus"
import useToast from "../../hooks/useToast"
import { useGlobal } from "../../context/globalContext"
import SelectInput from "../selectInput/SelectInput"
import { H6 } from "./statusStyles"

const wait = false

export default function Status({ row, modify = true }) {
  const statusValue = useRef({
    id: row.status.id,
    name: row.status.name || row.status
  })
  const { global } = useGlobal()
  const [input, setInput] = useState(false)
  const [response, fetch] = useApi(wait)
  const [status, setStatus] = useState(statusValue.current)

  useToast(response)

  const key = event => {
    switch (event.key) {
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

    const data = { id: row.id, statusId: newStatus.id }

    fetch(...updateStatus(data))

    statusValue.current = newStatus

    setInput(false)
  }

  const handleInput = () => {
    if (modify) setInput(true)
  }

  return input ? (
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
    />
  ) : (
    <H6 onClick={handleInput}>
      {typeof row.status === "string" ? row.status : statusValue.current.name}
    </H6>
  )
}
