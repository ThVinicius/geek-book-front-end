import { useState } from "react"
import useApi from "../../hooks/useApi"
import useToast from "../../hooks/useToast"
import updateLastSeen from "./api/updateLastSeen"
import { Container, H6, Increment, Decrement } from "./lastSeenStyles"
import InputIcon from "../inputIcon/Input"
import CloseIcon from "@mui/icons-material/Close"

function LastSeen({
  lastSeen,
  setCollections,
  collectionId,
  control = true,
  justify = "end",
  modify = true
}) {
  const [input, setInput] = useState(false)
  const [last, setLast] = useState(lastSeen)
  const [response, fetch] = useApi(false)

  useToast(response)

  const handleCancel = () => {
    setLast(lastSeen)

    setInput(false)
  }

  const key = event => {
    switch (event.key) {
      case "Enter":
        const lastSeen = Number(last)

        const data = { collectionId, lastSeen }

        fetch(...updateLastSeen(data))

        setInput(false)

        setCollections(prev =>
          prev.map(item => {
            if (item.collection.id === collectionId)
              return { ...item, lastSeen }

            return item
          })
        )

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

    const increment = value

    const data = { collectionId, increment }

    fetch(...updateLastSeen(data))

    setCollections(prev =>
      prev.map(item => {
        if (item.collection.id === collectionId) return { ...item, lastSeen }

        return item
      })
    )
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
          {control && (
            <Decrement onClick={() => incrementLastSeen(-1)}>-</Decrement>
          )}
          <H6 onClick={handleInput}>{lastSeen}</H6>
          {control && (
            <Increment onClick={() => incrementLastSeen(1)}>+</Increment>
          )}
        </>
      )}
    </Container>
  )
}

export default LastSeen
