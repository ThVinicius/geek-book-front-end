import { useState } from "react"
import useWindowResize from "../../hooks/useWindowResize"
import Drawer from "../drawer/Drawer"
import Logo from "../logo/Logo"
import menu from "../../assets/images/Hamburger_icon.svg"
import { Container, Menu } from "./headerStyles"

export default function HeaderMobile() {
  const windowSize = useWindowResize()
  const [open, setOpen] = useState(false)

  return (
    windowSize.width <= 420 && (
      <Container>
        <Drawer open={open} setOpen={setOpen} />
        <Menu src={menu} alt="Menu hamburger" onClick={() => setOpen(true)} />
        <Logo />
      </Container>
    )
  )
}
