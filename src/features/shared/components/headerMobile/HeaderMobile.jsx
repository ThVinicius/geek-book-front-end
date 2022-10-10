import Input from "../../../../components/input/Input"
import { Container, Logo, Content, AvatarContainer } from "./headerStyles"
import book from "../../../../assets/images/book-removebg-preview.png"

export default function HeaderMobile({ collections, search, setSearch, tab }) {
  return (
    <Container>
      <Logo>
        <img src={book} alt="Logo" />
        <h1>
          Geek<span>Book</span>
        </h1>
      </Logo>
      {collections && (
        <Content>
          <p>Você está vendo a lista do(a) {collections.nickname}</p>
          <Input
            width="90%"
            size="small"
            disabled={tab || tab === 1}
            label="Filtrar pelo nome"
            value={search}
            onChange={e => setSearch(e.target.value)}
            required={false}
          />
        </Content>
      )}
    </Container>
  )
}
