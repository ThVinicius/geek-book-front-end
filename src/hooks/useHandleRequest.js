import { useEffect } from "react"

function useHandleRequest(response, set, loading) {
  useEffect(() => {
    if (loading !== undefined) loading.current = false

    if (Array.isArray(response) || response?.nickname || response?.shortUrl) {
      set(response)
    }
  }, [response])
}

export default useHandleRequest
