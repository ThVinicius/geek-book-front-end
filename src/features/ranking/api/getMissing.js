export default function getMissing() {
  const submitToken = true

  const userCollections = { url: "/rankings/user-collections", method: "get" }

  const requests = [userCollections]

  return [requests, submitToken, sucessCase, failCase]
}

function sucessCase(props) {
  const { res, setResponse } = props

  const [resCollection] = res

  setResponse(resCollection.data)
}

function failCase(props) {
  const { res, setResponse } = props

  const type = "error"

  let nav = "/"

  let message

  switch (res?.statusText) {
    case "Unauthorized":
    case "Upgrade Required":
      message =
        "Ocorreu um um erro durante sua autenticação\nTente fazer o login novamente"

      break

    case "Token expired/invalid":
      message = "Sua sessão expirou\nFaça o login novamente"

      break

    default:
      message = "Ocorreu um erro inesperado!\nTente mais tarde"
      break
  }

  setResponse({ type, message, nav })
}
