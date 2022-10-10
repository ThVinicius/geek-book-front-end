import styled from "styled-components"

const Container = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 420px) {
    width: 100%;
    flex-direction: column;
  }

  &.logo-desktop {
    @media (max-width: 420px) {
      display: none;
    }
  }
`

const H1 = styled.h1`
  width: 80%;
  font: normal 700 28px "Lexend", sans-serif;
  text-align: center;
`

export { Container, H1 }
