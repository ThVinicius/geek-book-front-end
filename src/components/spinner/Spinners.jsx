import { MagnifyingGlass, Oval } from 'react-loader-spinner'
import { Container } from './spinnerStyles'

export function Glass({ height = '120', width = '120' }) {
  return (
    <Container>
      <MagnifyingGlass
        height={height}
        width={width}
        glassColor="#c0efff"
        color="#e15b64"
      />
    </Container>
  )
}

export function OvalLoading() {
  return (
    <Oval
      height={80}
      width={80}
      color="#4fa94d"
      secondaryColor="#4fa94d"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  )
}
