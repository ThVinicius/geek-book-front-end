import ItemTemplate from "../../../../components/itemTemplate/ItemTemplate"
import Place from "../../../ranking/components/place/Place"
import { Container } from "../../../complete/container/container"

export default function Switch({ tab, result, collections, setCollections }) {
  switch (tab) {
    case 0:
      return result.map((row, index) => (
        <ItemTemplate
          row={row}
          setCollections={setCollections}
          key={index}
          modify={false}
        />
      ))

    case 1:
      return (
        <Container>
          {collections?.ranking.map((row, index) => (
            <Place collection={row} key={index} modify={false} />
          ))}
        </Container>
      )

    default:
      break
  }
}
