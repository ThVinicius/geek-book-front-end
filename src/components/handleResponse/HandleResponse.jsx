import { Container } from "./handleStyles"
import { Glass } from "../spinner/Spinners"

export default function HandleResponse({ collections, search, status }) {
  let message

  if (collections === null || collections === undefined) message = <Glass />
  else if (search.length > 0) {
    message = "Sua pesquisa não obteve nenhum resultado 😞"
  } else message = `Você não possui nenhuma obra ${status} 😞`

  return <Container>{message}</Container>
}
