import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import useLogout from "./useLogout"

export default function useToast(res) {
  const navigate = useNavigate()
  const { logout } = useLogout()

  useEffect(() => {
    if (res !== null && res.message !== undefined) {
      switch (res.type) {
        case "error":
          toast.error(res.message)
          break

        case "success":
          toast.success(res.message)
          break

        default:
          break
      }

      if (res.nav !== undefined) {
        if (res.nav === "/") logout()
        else navigate(res.nav)
      }
    }
  }, [res])
}
