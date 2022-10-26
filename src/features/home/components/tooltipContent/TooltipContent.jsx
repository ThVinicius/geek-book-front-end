import { Container } from "./tooltipStyles"
import notFound from "../../../../assets/images/notFound.jpeg"

export default function TooltipContent({ poster, synopsis }) {
  return (
    <Container>
      <img src={poster || notFound} alt="Poster" />
      <p>{synopsis || "Essa obra não possui sinopse"}</p>
    </Container>
  )
}
