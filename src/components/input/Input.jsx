import { Container } from './inputStyles'

export default function Input(props) {
  const { label, type = 'text', value, onChange, required = true } = props

  const { multiline = false } = props

  return (
    <Container
      label={label}
      type={type}
      required={required}
      value={value}
      onChange={onChange}
      multiline={multiline}
    />
  )
}
