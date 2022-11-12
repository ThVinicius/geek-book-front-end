import { useEffect } from 'react'
import usePersistence from '../../../hooks/usePersistence'
import AppContainer from '../../../containers/auth/App'
import Content from '../../../components/authContent/Content'
import Form from '../components/form/Form'
import Container from '../components/container/Container'

export default function SignIn() {
  const { loginPersistence } = usePersistence()

  useEffect(() => {
    const navigate = '/active'

    loginPersistence(navigate)
  }, [])

  return (
    <AppContainer>
      <Content>
        <Container />
      </Content>
    </AppContainer>
  )
}
