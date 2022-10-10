import AppContainer from "../../../containers/app/App"
import Content from "../../../containers/content/Content"
import Sidebar from "../../../components/sidebar/Sidebar"
import HeaderMobile from "../../../components/headerMobile/HeaderMobile"
import { Container } from "../../complete/container/container"
import Itens from "../components/itens/Itens"

export default function Ranking() {
  return (
    <AppContainer>
      <HeaderMobile />
      <Sidebar />
      <Content>
        <Container>
          <Itens />
        </Container>
      </Content>
    </AppContainer>
  )
}
