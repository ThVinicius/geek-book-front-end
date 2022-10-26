import { useEffect, useState } from "react"
import useApi from "../../../../hooks/useApi"
import getActiveUserCollections from "../../api/getActiveUserCollections"
import useToast from "../../../../hooks/useToast"
import useHandleRequest from "../../../../hooks/useHandleRequest"
import useSearch from "../../../../hooks/useSearch"
import usePersistence from "../../../../hooks/usePersistence"
import HandleResponse from "../../../../components/handleResponse/HandleResponse"
import RenderItens from "../renderItens/RenderItens"

const emptyMessage = "Você não possui nenhuma obra ativa 😞"

export default function Itens({ search }) {
  const { loginPersistence } = usePersistence()
  const [collections, setCollections] = useState(null)
  const [response, fetch] = useApi()
  const { result } = useSearch(search, collections)

  useHandleRequest(response, setCollections)

  useToast(response)

  useEffect(() => {
    loginPersistence()

    fetch(...getActiveUserCollections())
  }, [])

  return result === null || result === undefined || result.length === 0 ? (
    <HandleResponse
      collections={result}
      search={search}
      emptyMessage={emptyMessage}
    />
  ) : (
    <RenderItens
      result={result}
      setCollections={setCollections}
      search={search}
    />
  )
}
