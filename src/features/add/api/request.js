export default function request(data) {
  const submitToken = true

  const request = { url: '/user-collections', method: 'post', data }

  const requests = [request]

  return [requests, submitToken, sucessCase, failCase]
}

function sucessCase(props) {
  const { res, global, setGlobal, setResponse } = props

  const type = 'success'

  const message = 'Adicionado com sucesso!'

  const [data] = res

  global.userCollections = data.data

  setResponse({ type, message })
}

function failCase(props) {
  const { res, setResponse } = props

  const type = 'error'

  let nav = '/'

  let message

  switch (res?.statusText) {
    case 'Bad Request':
      if (typeof res.data === 'string') message = res.data
      else message = res.data.reduce((acc, cur) => `${acc}\n` + cur, '')

      nav = undefined

      break

    case 'Unauthorized':
    case 'Upgrade Required':
      message =
        'Ocorreu um um erro durante sua autenticação\nTente fazer o login novamente'

      break

    case 'Conflit':
      message = res.data

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
