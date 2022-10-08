export default function getLink(link) {
  const submitToken = false

  const request = { url: `/share/${link}`, method: "get" }

  const requests = [request]

  return [requests, submitToken, sucessCase, failCase]
}

function sucessCase(props) {
  const { res, setResponse } = props

  const [response] = res

  setResponse(response.data)
}

function failCase(props) {
  const { res, setResponse } = props

  const type = "error"

  let message

  switch (res?.statusText) {
    case "Not Found":
      message = "link não encontrado"

      break

    default:
      message = "Ocorreu um erro inesperado!\nTente mais tarde"
      break
  }

  setResponse({ type, message })
}
