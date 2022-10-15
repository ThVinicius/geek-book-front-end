import { useEffect, useLayoutEffect, useRef, useState } from "react"
import useApi from "../../hooks/useApi"
import useToast from "../../hooks/useToast"
import updateLastSeen from "./api/updateLastSeen"
import { Container } from "./lastSeenStyles"
import InputIcon from "../inputIcon/Input"
import CloseIcon from "@mui/icons-material/Close"

function LastSeen({
  lastSeen,
  collectionId,
  control = true,
  justify = "end",
  modify = true
}) {
  const [lastSeenValue, setLastSeenValue] = useState(lastSeen)
  const [input, setInput] = useState(false)
  const [last, setLast] = useState(lastSeen)
  const [response, fetch] = useApi(false)

  useToast(response)

  useEffect(() => {
    setLastSeenValue(lastSeen)
  }, [lastSeen])

  const handleCancel = () => {
    setLast(lastSeenValue)

    setInput(false)
  }

  const key = event => {
    switch (event.key) {
      case "Enter":
        const lastSeen = Number(last)

        setLastSeenValue(lastSeen)

        const data = { collectionId, lastSeen }

        fetch(...updateLastSeen(data))

        setInput(false)

        return

      case "Escape":
        handleCancel()
        return

      default:
        break
    }
  }

  const incrementLastSeen = value => {
    setLast(prev => prev + value)

    const lastSeen = Number(last) + value

    setLastSeenValue(lastSeen)

    const increment = value

    const data = { collectionId, increment }

    fetch(...updateLastSeen(data))
  }

  const handleInput = () => {
    if (modify) setInput(true)
  }

  const handleLast = target => {
    if (target.validity.valid || target.value === "") setLast(target.value)
  }

  return (
    <Container justify={justify}>
      {input ? (
        <InputIcon
          label="Novo valor"
          number={true}
          value={last}
          onChange={e => handleLast(e.target)}
          onKeyUp={key}
          autoFocus={true}
          icon={<CloseIcon onClick={handleCancel} />}
        />
      ) : (
        <>
          {control && <p onClick={() => incrementLastSeen(-1)}>-</p>}
          <h6 onClick={handleInput}>{lastSeenValue}</h6>
          {control && <p onClick={() => incrementLastSeen(1)}>+</p>}
        </>
      )}
    </Container>
  )
}

export default LastSeen
