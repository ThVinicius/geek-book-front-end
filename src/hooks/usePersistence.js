import { useNavigate } from 'react-router-dom'
import { useGlobal } from '../context/globalContext'

export default function usePersistence() {
  const { global } = useGlobal()
  const navigate = useNavigate()

  function loginPersistence(nav) {
    const stringfyUser = localStorage.getItem('user')

    if (global.token === null && stringfyUser !== null) {
      const { token, ...user } = JSON.parse(stringfyUser)

      global.token = token

      global.user = user

      if (nav !== undefined) navigate(nav)
    }
  }

  return { loginPersistence }
}
