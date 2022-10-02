import { useEffect } from 'react'

export default function useHanleRequest(response, set) {
  useEffect(() => {
    if (Array.isArray(response)) set(response)
  }, [response])
}
