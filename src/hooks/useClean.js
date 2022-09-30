import { useEffect } from 'react'

export default function useClean(array, step, listen) {
  useEffect(() => {
    if (listen?.type === 'success') {
      step(0)

      for (const input of array) {
        input('')
      }
    }
  }, [listen])
}
