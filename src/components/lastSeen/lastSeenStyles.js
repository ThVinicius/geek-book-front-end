import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${props => props.justify};
  align-items: center;
  gap: 5px;

  h6 {
    font: normal 500 18px "Poppins", sans-serif;
    color: green;
  }

  p {
    font: normal 500 18px "Poppins", sans-serif;
    cursor: pointer;
  }
`

export { Container }
