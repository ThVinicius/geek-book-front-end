import { Container } from "./inputStyles"

export default function Input(props) {
  const { label, type = "text", value, onChange, required = true } = props

  const { multiline = false, disabled = false, width = "75%" } = props

  const { dataCy, size = null } = props

  return (
    <Container
      size={size}
      data-cy={dataCy}
      label={label}
      type={type}
      required={required}
      disabled={disabled}
      value={value}
      onChange={onChange}
      multiline={multiline}
      width={width}
    />
  )
}
