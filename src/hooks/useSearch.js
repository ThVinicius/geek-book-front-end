import { useEffect, useState } from 'react'

export default function useSearch(search, array) {
  const [result, setResult] = useState(array)

  useEffect(() => {
    if (search.length > 0) {
      const target = search.toUpperCase()

      setResult(
        array.filter(({ collection }) =>
          collection.name.toUpperCase().includes(target)
        )
      )
    } else {
      setResult(array)
    }
  }, [search, array])

  return { result }
}
