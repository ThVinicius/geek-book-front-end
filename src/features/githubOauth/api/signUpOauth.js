export default function signUpOath(data) {
  const submitToken = true

  const tokenName = 'oAuth'

  const request = { url: '/signup/oauth', method: 'post', data }

  const requests = [request]

  return [requests, submitToken, sucessCase, failCase, tokenName]
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

      break

    case 'Unauthorized':
    case 'Upgrade Required':
      message =
        'Ocorreu um um erro durante sua autenticação\nTente fazer o login novamente'

      break

    case 'Token expired/invalid':
      message = 'Sua sessão expirou\nFaça o login novamente'

      break

    case 'Conflict':
      message = 'Esse nickname já esta em uso!\ntente outro'

      global.oAuthToken = res.data.token

      break

    default:
      message = 'Ocorreu um erro inesperado!\nTente mais tarde'
      break
  }

  setResponse({ message, type, nav })
}
