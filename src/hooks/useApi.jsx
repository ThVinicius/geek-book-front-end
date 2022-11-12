import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useGlobal } from '../context/globalContext'
import BASE_URL from '../config/api'

function useApi(wait = true) {
  const { global, setGlobal } = useGlobal()
  const [response, setResponse] = useState(null)
  const loading = useRef(false)
  const navigate = useNavigate()

  function fetch(requests, submitToken, sucess, fail, tokenName = 'user') {
    if (loading.current === true && wait === true) return

    setResponse('loading')

    loading.current = true

    const getToken = tokenName === 'user' ? global.token : global.oAuthToken

    const headers = submitToken
      ? {
          Authorization: `Bearer ${getToken}`
        }
      : null

    const promises = []

    for (const request of requests) {
      const config = { baseURL: BASE_URL, headers, ...request }

      const promise = axios.request(config)

      promises.push(promise)
    }

    Promise.all(promises)
      .then(res => {
        sucess({ res, setResponse, global, setGlobal, navigate })
      })
      .catch(res =>
        fail !== null
          ? fail({ res: res.response, global, setResponse, navigate })
          : setResponse(res.response.data)
      )
      .finally(() => {
        if (wait === true) loading.current = false
      })
  }

  return [response, fetch]
}

export default useApi
