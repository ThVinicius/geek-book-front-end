import { useEffect } from 'react'
import qs from 'query-string'
import useToast from '../../../../hooks/useToast'
import useApi from '../../../../hooks/useApi'
import postOath from '../../api/postOath'
import Logo from '../../../../components/logo/Logo'
import { OvalLoading } from '../../../../components/spinner/Spinners'
import Form from '../form/Form'
import { Container, Content } from './containerStyles'

export default function OauthContainer() {
  const [response, fetch] = useApi()

  useToast(response)

  useEffect(() => {
    const { code } = qs.parseUrl(window.location.href).query

    fetch(...postOath({ code }))
  }, [])

  return (
    <Container>
      <Logo imgSize="90px" fontSize="40px" />
      <Content>
        {response !== 'nicknameConflit' ? (
          <>
            <h1>Fazendo login, aguarde por alguns segundos</h1>
            <OvalLoading />
          </>
        ) : (
          <Form />
        )}
      </Content>
    </Container>
  )
}
