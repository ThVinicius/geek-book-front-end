import { useEffect } from 'react'

export default function useHandleRequest(response, set) {
  useEffect(() => {
    if (Array.isArray(response)) set(response)
  }, [response])
}
