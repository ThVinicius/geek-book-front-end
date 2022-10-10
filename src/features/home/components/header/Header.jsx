import { useState } from "react"
import Input from "../../../../components/input/Input"
import menu from "../../../../assets/images/Hamburger_icon.svg"
import Drawer from "../../../../components/drawer/Drawer"
import { Container, Menu } from "./headerStyles"

export default function HomeHeader({ search, setSearch, tab = false }) {
  const [open, setOpen] = useState(false)

  return (
    <Container>
      <Drawer open={open} setOpen={setOpen} />
      <Menu src={menu} alt="Menu hamburger" onClick={() => setOpen(true)} />
      <Input
        disabled={tab || tab === 1}
        label="Filtrar pelo nome"
        value={search}
        onChange={e => setSearch(e.target.value)}
        required={false}
      />
    </Container>
  )
}
