import { useNavigate } from 'react-router-dom'
import { useGlobal } from '../context/globalContext'

export default function useLogout() {
  const { global } = useGlobal()
  const navigate = useNavigate()

  const logout = () => {
    global.token = null
    global.userCollections = null
    global.user = null

    localStorage.removeItem('user')

    navigate('/')
  }

  return { logout }
}
