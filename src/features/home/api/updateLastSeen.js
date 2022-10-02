export default function updateLastSeen(data) {
  const submitToken = true

  const request = { url: '/user-collections', method: 'patch', data }

  const requests = [request]

  return [requests, submitToken, sucessCase, failCase]
}

function sucessCase(props) {
  const { res } = props

  const [response] = res

  console.log(response)
}

function failCase(props) {
  const { res, setResponse } = props

  const type = 'error'

  let nav = '/'

  let message

  switch (res?.statusText) {
    case 'Unauthorized':
    case 'Upgrade Required':
      message =
        'Ocorreu um um erro durante sua autenticação\nTente fazer o login novamente'

      break

    case 'Token expired/invalid':
      message = 'Sua sessão expirou\nFaça o login novamente'

      break

    default:
      message = 'Ocorreu um erro inesperado!\nTente mais tarde'
      break
  }

  setResponse({ type, message, nav })
}
