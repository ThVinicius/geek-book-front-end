import useSearch from "../../../../hooks/useSearch"
import ItemTemplate from "../../../../components/itemTemplate/ItemTemplate"
import HandleResponse from "../../../../components/handleResponse/HandleResponse"
import { Container } from "../../../complete/container/container"

const emptyMessage = "Link não encontrado 😞"

export default function Itens({ collections, setCollections, search }) {
  const { result } = useSearch(search, collections?.userCollections)

  return result === null || result === undefined || result.length === 0 ? (
    <HandleResponse
      search={search}
      collections={result}
      emptyMessage={emptyMessage}
    />
  ) : (
    <Container>
      {result.map((row, index) => (
        <ItemTemplate
          row={row}
          setCollections={setCollections}
          key={index}
          modify={false}
        />
      ))}
    </Container>
  )
}
