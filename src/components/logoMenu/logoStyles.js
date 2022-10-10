import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font: normal 700 28px "Lexend", sans-serif;
    color: ${props => props.color};
  }

  span {
    color: #3f61d7;
  }
`

export { Container }
