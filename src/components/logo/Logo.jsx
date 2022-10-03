import book from '../../assets/images/book-removebg-preview.png'
import { Container } from './logoStyles'

export default function Logo({ className }) {
  return (
    <Container className={className}>
      <img src={book} alt="logo" />
      <h1>
        Geek<span>Book</span>
      </h1>
    </Container>
  )
}
