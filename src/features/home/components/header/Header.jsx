import Input from '../../../../components/input/Input'
import { Container } from './headerStyles'

export default function HomeHeader({ search, setSearch }) {
  return (
    <Container>
      <Input
        label="Filtrar pelo nome"
        value={search}
        onChange={e => setSearch(e.target.value)}
        required={false}
      />
    </Container>
  )
}
