export default function request(id) {
  const submitToken = false

  const request = { url: `/collections/${id}`, method: 'get' }

  const requests = [request]

  return [requests, submitToken, sucessCase, failCase]
}

function sucessCase(props) {
  const { res, setResponse } = props

  const [response] = res

  setResponse(response.data)
}

function failCase(props) {
  const { setResponse } = props

  const type = 'error'

  let nav = '/'

  let message = 'Ocorreu um erro inesperado!\nTente mais tarde'

  setResponse({ type, message, nav })
}
