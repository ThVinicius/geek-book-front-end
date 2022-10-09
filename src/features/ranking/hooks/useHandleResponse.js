import { useEffect } from "react"

function useHandleResponse(response, setRankingId, loading) {
  useEffect(() => {
    if (typeof response !== "string") {
      setRankingId(response)
    }

    loading.current = false
  }, [response])
}

export default useHandleResponse
