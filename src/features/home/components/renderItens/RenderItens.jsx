import useWindowResize from "../../../../hooks/useWindowResize"
import CustomizedTables from "../table/Table"
import ItemTemplate from "../../../../components/itemTemplate/ItemTemplate"
import { Container } from "../../../complete/container/container"

export default function RenderItens({ result, setCollections, search }) {
  const windowSize = useWindowResize()

  if (windowSize.width <= 420) {
    return (
      <Container>
        {result.map((row, index) => (
          <ItemTemplate
            row={row}
            key={index}
            setCollections={setCollections}
            control={true}
          />
        ))}
      </Container>
    )
  }

  return (
    <CustomizedTables
      result={result}
      setCollections={setCollections}
      search={search}
    />
  )
}
