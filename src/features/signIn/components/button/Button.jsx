import { Container } from './buttonStyles'

export default function Button({ icon, description, func, params }) {
  return (
    <Container onClick={() => func(params)}>
      <div>{icon}</div>
      <span>{description}</span>
    </Container>
  )
}
