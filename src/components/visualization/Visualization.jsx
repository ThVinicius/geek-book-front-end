import { useState } from 'react'
import useApi from '../../hooks/useApi'
import updatePublic from './api/updatePublic'
import useToast from '../../hooks/useToast'
import SelectInput from '../selectInput/SelectInput'
import visualizationOptions from '../../utils/visualizationOptions'
import { Container, H6 } from './visualizationStyles'

const wait = false

function Visualization({ row, modify = true, setCollections }) {
  const [input, setInput] = useState(false)
  const [response, fetch] = useApi(wait)
  const [publicValue, setPublicValue] = useState(row.public)

  useToast(response)

  const key = event => {
    switch (event.key) {
      case 'Escape':
        setPublicValue(row.public)

        setInput(false)
        return

      default:
        break
    }
  }

  const handlePublic = value => {
    setPublicValue(value)

    setCollections(prev =>
      prev.map(item => {
        if (item.id === row.id) return { ...item, public: value }

        return item
      })
    )

    const data = { id: row.id, publicValue: value }

    fetch(...updatePublic(data))
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
          label="Visualização"
          options={visualizationOptions()}
          value={publicValue}
          onChange={e => handlePublic(e.target.value)}
          onClose={onClose}
        />
      ) : (
        <H6 onClick={handleInput}>{publicValue ? 'Público' : 'Privado'}</H6>
      )}
    </Container>
  )
}

export default Visualization
