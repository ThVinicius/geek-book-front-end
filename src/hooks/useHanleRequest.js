import { useEffect } from 'react'

export default function useHanleRequest(response, set) {
  useEffect(() => {
    if (response !== null && response !== 'loading') set(response)
  }, [response])
}
