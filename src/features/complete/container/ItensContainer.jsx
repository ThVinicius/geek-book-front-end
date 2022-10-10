import { useEffect, useState } from "react"
import useApi from "../../../hooks/useApi"
import getCompleteUserCollections from "../api/getCompleteUserCollections"
import useHandleRequest from "../../../hooks/useHandleRequest"
import useToast from "../../../hooks/useToast"
import useSearch from "../../../hooks/useSearch"
import usePersistence from "../../../hooks/usePersistence"
import { Container } from "./container"
import ItemTemplate from "../../../components/itemTemplate/ItemTemplate"
import HandleResponse from "../../../components/handleResponse/HandleResponse"

const emptyMessage = "Você não possui nenhuma obra completa 😞"

export default function Itens({ search }) {
  const [collections, setCollections] = useState(null)
  const [response, fetch] = useApi()
  const { result } = useSearch(search, collections)

  usePersistence()

  useHandleRequest(response, setCollections)

  useToast(response)

  useEffect(() => {
    fetch(...getCompleteUserCollections())
  }, [])

  return result === null || result === undefined || result.length === 0 ? (
    <HandleResponse
      search={search}
      collections={result}
      emptyMessage={emptyMessage}
    />
  ) : (
    <Container>
      {result.map((row, index) => (
        <ItemTemplate row={row} key={index} setCollections={setCollections} />
      ))}
    </Container>
  )
}
