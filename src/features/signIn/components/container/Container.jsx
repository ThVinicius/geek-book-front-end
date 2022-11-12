import { useState } from 'react'
import Buttons from '../buttons/Buttons'
import Form from '../form/Form'

export default function Container() {
  const [selected, setSelected] = useState(null)

  switch (selected) {
    case 'email':
      return <Form setSelected={setSelected} />

    default:
      return <Buttons setSelected={setSelected} />
  }
}
