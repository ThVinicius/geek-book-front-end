export default function postOath(data) {
  const submitToken = false

  const request = { url: '/signin/github', method: 'post', data }

  const requests = [request]

  return [requests, submitToken, sucessCase, failCase]
}

function sucessCase(props) {
  const { res, global, navigate } = props

  const [response] = res

  const userStringfy = JSON.stringify(response.data)

  localStorage.setItem('user', userStringfy)

  const { token, ...user } = response.data

  global.token = token

  global.user = user

  navigate('/active')
}

function failCase(props) {
  const { res, global, setResponse } = props

  const type = 'error'

  let nav

  let message

  switch (res.statusText) {
    case 'Bad Request':
      message = res.data.reduce((acc, cur) => `${acc}\n` + cur, '')

      nav = '/'

      break

    case 'Unauthorized':
      message = 'Ocorreu um erro durante sua autenticação, tente novamente'

      nav = '/'

      break

    case 'Conflict':
      global.oAuthToken = res.data.token

      return setResponse('nicknameConflit')

    default:
      message = 'Ocorreu um erro inesperado!\nTente mais tarde'

      nav = '/'
      break
  }

  setResponse({ message, type, nav })
}
