import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useGlobal } from "../../../context/globalContext"
import AppContainer from "../../../containers/auth/App"
import Content from "../../../components/authContent/Content"
import Form from "../components/form/Form"

export default function SignIn() {
  const { global } = useGlobal()
  const navigate = useNavigate()

  useEffect(() => {
    const userStringfy = localStorage.getItem("user")

    if (userStringfy !== null) {
      const { token, ...user } = JSON.parse(userStringfy)

      global.token = token
      global.user = user

      navigate("/home")
    }
  }, [])

  return (
    <AppContainer>
      <Content>
        <Form />
      </Content>
    </AppContainer>
  )
}
