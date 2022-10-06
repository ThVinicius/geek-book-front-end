import { useState } from "react"
import AppContainer from "../../../containers/app/App"
import Content from "../../../containers/content/Content"
import Sidebar from "../../../components/sidebar/Sidebar"
import Header from "../../../containers/header/Header"
import HomeHeader from "../../home/components/header/Header"
import Itens from "../container/ItensContainer"

export default function MyCollection() {
  const [search, setSearch] = useState("")

  return (
    <AppContainer>
      <Sidebar />
      <Content>
        <Header>
          <HomeHeader search={search} setSearch={setSearch} />
        </Header>
        <Itens search={search} />
      </Content>
    </AppContainer>
  )
}
