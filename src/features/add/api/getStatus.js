export default function getStatus() {
  const submitToken = false

  const request = { url: "/status", method: "get" }

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

  const type = "error"

  const nav = "/"

  const message = "Ocorreu um erro inesperado!\nTente mais tarde"

  setResponse({ type, message, nav })
}
