import qs from 'query-string'

export default function gitHubAuthorize() {
  const GITHUB_AUTH_URL = 'https://github.com/login/oauth/authorize'
  const params = {
    scope: 'read:user',
    client_id: import.meta.env.VITE_CLIENT_ID,
    redirect_uri: import.meta.env.VITE_REDIRECT_URL,
    state: 'GeekBook'
  }

  const queryStrings = qs.stringify(params)
  const authorizationUrl = `${GITHUB_AUTH_URL}?${queryStrings}`

  window.open(authorizationUrl, 'noopener,noreferrer')
}
