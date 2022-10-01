import { useState } from 'react'
import { Container } from './lastSeenStyles'
import InputIcon from '../../../../components/inputIcon/Input'
import CloseIcon from '@mui/icons-material/Close'

export default function LastSeen({ lastSeen }) {
  const [input, setInput] = useState(false)
  const [last, setLast] = useState(lastSeen)

  return (
    <Container>
      {input ? (
        <InputIcon
          label="Novo valor"
          value={last}
          onChange={e => setLast(e.target.value)}
          icon={<CloseIcon onClick={() => setInput(false)} />}
        />
      ) : (
        <>
          <p onClick={() => setLast(prev => prev - 1)}>-</p>
          <h6 onClick={() => setInput(true)}>{last}</h6>
          <p onClick={() => setLast(prev => prev + 1)}>+</p>
        </>
      )}
    </Container>
  )
}
