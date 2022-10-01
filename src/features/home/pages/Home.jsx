import AppContainer from '../../../containers/app/App'
import Content from '../../../containers/content/Content'
import Sidebar from '../../../components/sidebar/Sidebar'
import Header from '../../../containers/header/Header'
import HomeHeader from '../components/header/Header'
import Table from '../components/table/Table'

export default function Home() {
  return (
    <AppContainer>
      <Sidebar />
      <Content>
        <Header>
          <HomeHeader />
        </Header>
        <Table />
      </Content>
    </AppContainer>
  )
}
