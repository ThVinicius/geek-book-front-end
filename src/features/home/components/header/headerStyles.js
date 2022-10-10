import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 420px) {
    justify-content: space-around;
  }
`

const Menu = styled.img`
  width: 40px;
  height: 40px;
  display: none;

  @media (max-width: 420px) {
    display: flex;
  }
`

export { Container, Menu }
