import { useState } from "react"
import AppContainer from "../../../containers/app/App"
import Content from "../../../containers/content/Content"
import Sidebar from "../../../components/sidebar/Sidebar"
import SearchContainer from "../../../containers/search/Search"
import HomeHeader from "../components/header/Header"
import Itens from "../components/itens/Itens"

export default function Active() {
  const [search, setSearch] = useState("")

  return (
    <AppContainer>
      <Sidebar />
      <Content>
        <SearchContainer>
          <HomeHeader search={search} setSearch={setSearch} />
        </SearchContainer>
        <Itens search={search} />
      </Content>
    </AppContainer>
  )
}
