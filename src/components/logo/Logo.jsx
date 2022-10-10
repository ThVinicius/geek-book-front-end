import book from "../../assets/images/book-removebg-preview.png"
import { Container } from "./logoStyles"

function Logo({ className, imgSize = "63.5px", fontSize = "36px" }) {
  return (
    <Container className={className} imgSize={imgSize} fontSize={fontSize}>
      <img src={book} alt="logo" />
      <h1>
        Geek<span>Book</span>
      </h1>
    </Container>
  )
}

export default Logo
