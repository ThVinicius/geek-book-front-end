import { MagnifyingGlass } from 'react-loader-spinner'
import { Container } from './spinnerStyles'

export function Glass() {
  return (
    <Container>
      <MagnifyingGlass
        height="120"
        width="120"
        glassColor="#c0efff"
        color="#e15b64"
      />
    </Container>
  )
}
