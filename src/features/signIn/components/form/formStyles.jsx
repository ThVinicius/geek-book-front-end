import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  h1 {
    font: normal 500 24px 'Poppins', sans-serif;
    color: rgba(0, 0, 0, 0.8);
  }
`

const Anchor = styled(Link)`
  font: normal 500 16px 'Poppins', sans-serif;
  color: #000000;
`

const ButtonsBox = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Back = styled.div`
  padding: 7px;
  border-radius: 4px;
  background-color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  font: normal 400 16px 'Roboto', sans-serif;
  color: #000000;

  :hover {
    background-color: #f3f4fa;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
`

export { Container, Anchor, ButtonsBox, Back }
