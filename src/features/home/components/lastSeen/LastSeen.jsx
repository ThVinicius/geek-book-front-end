import { useRef, useState } from "react"
import useApi from "../../../../hooks/useApi"
import useToast from "../../../../hooks/useToast"
import updateLastSeen from "../../api/updateLastSeen"
import { Container } from "./lastSeenStyles"
import InputIcon from "../../../../components/inputIcon/Input"
import CloseIcon from "@mui/icons-material/Close"

export default function LastSeen({ lastSeen, collectionId }) {
  const lastSeenValue = useRef(lastSeen)
  const [input, setInput] = useState(false)
  const [last, setLast] = useState(lastSeen)
  const [response, fetch] = useApi(false)

  useToast(response)

  const key = event => {
    switch (event.key) {
      case "Enter":
        const lastSeen = Number(last)

        lastSeenValue.current = lastSeen

        const data = { collectionId, lastSeen }

        fetch(...updateLastSeen(data))

        setInput(false)

        return

      case "Escape":
        setLast(lastSeenValue.current)

        setInput(false)
        return

      default:
        break
    }
  }

  const updateLast = value => {
    setLast(prev => prev + value)

    const lastSeen = Number(last) + value

    lastSeenValue.current = lastSeen

    const data = { collectionId, lastSeen }

    fetch(...updateLastSeen(data))
  }

  return (
    <Container>
      {input ? (
        <InputIcon
          label="Novo valor"
          value={last}
          onChange={e => setLast(e.target.value)}
          onKeyUp={key}
          icon={<CloseIcon onClick={() => setInput(false)} />}
        />
      ) : (
        <>
          <p onClick={() => updateLast(-1)}>-</p>
          <h6 onClick={() => setInput(true)}>{lastSeenValue.current}</h6>
          <p onClick={() => updateLast(1)}>+</p>
        </>
      )}
    </Container>
  )
}
