import { useEffect, useState } from "react"
import useApi from "../../../hooks/useApi"
import getCompleteUserCollections from "../api/getCompleteUserCollections"
import useHandleRequest from "../../../hooks/useHandleRequest"
import useToast from "../../../hooks/useToast"
import { Container, LoadingContainer } from "./container"
import ItemTemplate from "../itemTemplate/ItemTemplate"
import { Glass } from "../../../components/spinner/Spinners"

export default function Itens() {
  const [collections, setCollections] = useState(null)
  const [response, fetch] = useApi()

  console.log(collections)

  useHandleRequest(response, setCollections)

  useToast(response)

  useEffect(() => {
    fetch(...getCompleteUserCollections())
  }, [])

  return collections !== null ? (
    <Container>
      {collections.map((row, index) => (
        <ItemTemplate row={row} key={index} />
      ))}
    </Container>
  ) : (
    <LoadingContainer>
      <Glass />
    </LoadingContainer>
  )
}
