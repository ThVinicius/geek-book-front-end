import { Container } from './buttonStyles'

export default function Button({ icon, description, name, setSelected }) {
  return (
    <Container onClick={() => setSelected(name)}>
      <div>{icon}</div>
      <span>{description}</span>
    </Container>
  )
}
