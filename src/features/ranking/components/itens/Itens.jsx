import { useEffect, useState } from "react"
import useApi from "../../../../hooks/useApi"
import getRanking from "../../api/getRanking"
import useHandleResponse from "../../hooks/useHandleResponse"
import useHandleRequest from "../../../../hooks/useHandleRequest"
import useToast from "../../../../hooks/useToast"
import { Container } from "../../../complete/container/container"
import Place from "../place/Place"

export default function Itens() {
  const [ranking, setRanking] = useState(null)
  const [response, fetch] = useApi()

  useHandleRequest(response, setRanking)

  useToast(response)

  useEffect(() => {
    fetch(...getRanking())
  }, [])

  return (
    <Container>
      {ranking &&
        ranking.map((collection, index) => (
          <Place collection={collection} key={index} />
        ))}
    </Container>
  )
}
