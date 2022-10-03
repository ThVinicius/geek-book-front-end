import { useEffect } from 'react'

export default function useHandleRequest(response, set, loading) {
  useEffect(() => {
    if (loading !== undefined) loading.current = false

    if (Array.isArray(response)) set(response)
  }, [response])
}
