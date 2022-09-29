import AppContainer from '../../../containers/app/App'
import Content from '../../../containers/content/Content'
import Sidebar from '../../../components/sidebar/Sidebar'
import Header from '../../../containers/header/Header'
import Steps from '../../../components/steps/Steps'

export default function Home() {
  return (
    <AppContainer>
      <Sidebar />
      <Content>
        <Header></Header>
        <Steps />
      </Content>
    </AppContainer>
  )
}
