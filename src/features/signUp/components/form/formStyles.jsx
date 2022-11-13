import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.form`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  h1 {
    font: normal 500 24px 'Poppins', sans-serif;
    color: rgba(0, 0, 0, 0.8);
  }

  @media (max-height: 420px) {
    gap: 5px;

    h1 {
      font: normal 500 18px 'Poppins', sans-serif;
    }
  }
`

const Anchor = styled(Link)`
  font: normal 500 16px 'Poppins', sans-serif;
  color: #000000;
`

export { Container, Anchor }
