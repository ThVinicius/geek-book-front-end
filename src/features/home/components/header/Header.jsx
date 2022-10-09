import Input from "../../../../components/input/Input"
import { Container } from "./headerStyles"

export default function HomeHeader({ search, setSearch, tab = false }) {
  return (
    <Container>
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
