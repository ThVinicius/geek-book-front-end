export default function request(data) {
  const url = '/signup'

  const method = 'post'

  const submitToken = false

  const requests = [{ url, method, data }]

  return [requests, submitToken, sucessCase, failCase]
}

function sucessCase(props) {
  const { setResponse } = props

  const type = 'success'

  const message = 'Cadastro realizado com sucesso!'

  const nav = '/signin'

  setResponse({ type, message, nav })
}

function failCase(props) {
  const { res, setResponse } = props

  const type = 'error'

  let message

  switch (res.statusText) {
    case 'Bad Request':
      message = res.data.reduce((acc, cur) => `${acc}\n` + cur, '')

      break

    case 'Conflict':
      message = res.data

      break

    default:
      message = 'Ocorreu um erro inesperado!\nTente mais tarde'
      console.log(res)
      break
  }

  setResponse({ message, type })
}
