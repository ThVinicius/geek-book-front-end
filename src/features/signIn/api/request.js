export default function request(data) {
  const url = "/signin"

  const method = "post"

  const submitToken = false

  const requests = [{ url, method, data }]

  return [requests, submitToken, sucessCase, failCase]
}

function sucessCase(props) {
  const { res, global, navigate } = props

  const [response] = res

  const userStringfy = JSON.stringify(response.data)

  localStorage.setItem("user", userStringfy)

  const { token, ...user } = response.data

  global.token = token

  global.user = user

  navigate("/active")
}

function failCase(props) {
  const { res, setResponse } = props

  const type = "error"

  let message

  switch (res.statusText) {
    case "Bad Request":
      message = res.data.reduce((acc, cur) => `${acc}\n` + cur, "")

      break

    case "Unauthorized":
      message = "Email ou senha estão incorretos."

      break

    default:
      message = "Ocorreu um erro inesperado!\nTente mais tarde"
      break
  }

  setResponse({ message, type })
}
