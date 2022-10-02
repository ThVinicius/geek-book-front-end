import { useState } from 'react'
import useApi from '../../../../hooks/useApi'
import updateLastSeen from '../../api/updateLastSeen'
import { Container } from './lastSeenStyles'
import InputIcon from '../../../../components/inputIcon/Input'
import CloseIcon from '@mui/icons-material/Close'

export default function LastSeen({ lastSeen, collectionId }) {
  const [input, setInput] = useState(false)
  const [last, setLast] = useState(lastSeen)
  const [_, fetch] = useApi(false)

  const key = event => {
    switch (event.key) {
      case 'Enter':
        const lastSeen = Number(last)

        const data = { collectionId, lastSeen }

        fetch(...updateLastSeen(data))

        setInput(false)

        return

      case 'Escape':
        setInput(false)
        return

      default:
        break
    }
  }

  const updateLast = value => {
    setLast(prev => prev + value)

    const lastSeen = Number(last) + value

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
          <h6 onClick={() => setInput(true)}>{last}</h6>
          <p onClick={() => updateLast(1)}>+</p>
        </>
      )}
    </Container>
  )
}
