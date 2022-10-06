import { MagnifyingGlass } from "react-loader-spinner"
import { Container } from "./spinnerStyles"

export function Glass({ height = "120", width = "120" }) {
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
