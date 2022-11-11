export default function postOath(data) {
  const submitToken = false

  const request = { url: '/signin/github', method: 'post', data }

  const requests = [request]

  return [requests, submitToken, sucessCase, failCase]
}

function sucessCase(props) {
  const { res } = props

  const [response] = res

  console.log(response)
}

function failCase(props) {
  const { res } = props

  console.log(res)
}
