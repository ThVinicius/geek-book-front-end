import { useEffect } from 'react'
import qs from 'query-string'
import useApi from '../../../hooks/useApi'
import postOath from '../api/postOath'

export default function GithubCallback() {
  const [response, fetch] = useApi()

  useEffect(() => {
    const { code } = qs.parseUrl(window.location.href).query

    console.log(code)

    fetch(...postOath({ code }))
  }, [])

  return <h1>Ola</h1>
}
