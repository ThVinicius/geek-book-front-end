import { useEffect } from "react"
import { useGlobal } from "../context/globalContext"

export default function usePersistence() {
  const { global } = useGlobal()

  useEffect(() => {
    const stringfyUser = localStorage.getItem("user")

    if (global.token === null && stringfyUser !== null) {
      const { token, ...user } = JSON.parse(stringfyUser)

      global.token = token

      global.user = user
    }
  }, [])
}
