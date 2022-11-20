import { Container } from './buttonStyles'

export default function Button({ icon, description, func, params, dataCy }) {
  return (
    <Container onClick={() => func(params)} data-cy={dataCy}>
      <div>{icon}</div>
      <span>{description}</span>
    </Container>
  )
}
