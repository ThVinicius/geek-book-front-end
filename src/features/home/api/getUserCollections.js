export default function getUserCollections() {
  const submitToken = true

  const userCollections = { url: "/user-collections", method: "get" }

  const getAllStatus = { url: "/status", method: "get" }

  const requests = [userCollections, getAllStatus]

  return [requests, submitToken, sucessCase, failCase]
}

function sucessCase(props) {
  const { res, setResponse, global } = props

  const [userCollections, getAllStatus] = res

  global.status = getAllStatus.data

  console.log(global)

  setResponse(userCollections.data)
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
