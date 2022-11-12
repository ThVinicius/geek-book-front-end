import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
`

const Title = styled.h1`
  font: normal 500 24px 'Poppins', sans-serif;
  color: rgba(0, 0, 0, 0.8);
`

const Anchor = styled(Link)`
  margin-top: 50px;
  font: normal 500 16px 'Poppins', sans-serif;
  color: #000000;
`

export { Container, Title, Anchor }
