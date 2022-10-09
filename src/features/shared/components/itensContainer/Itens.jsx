import useSearch from "../../../../hooks/useSearch"
import HandleResponse from "../../../../components/handleResponse/HandleResponse"
import { Container, Content } from "./itens"
import BasicTabs from "../tabs/Tabs"
import Switch from "../switch/Switch"

const emptyMessage = "Link não encontrado 😞"

function Itens({ collections, setCollections, search, tab, setTab }) {
  const { result } = useSearch(search, collections?.userCollections)

  return result === null || result === undefined || result.length === 0 ? (
    <HandleResponse
      search={search}
      collections={result}
      emptyMessage={emptyMessage}
    />
  ) : (
    <Container>
      <BasicTabs value={tab} onChange={setTab} />
      <Content>
        <Switch
          tab={tab}
          result={result}
          collections={collections}
          setCollections={setCollections}
        />
      </Content>
    </Container>
  )
}

export default Itens
