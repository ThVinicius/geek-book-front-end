import Input from '../../../../components/input/Input'
import { Container } from './headerStyles'

export default function HomeHeader() {
  return (
    <Container>
      <Input label="Filtrar pelo nome" required={false} />
    </Container>
  )
}
