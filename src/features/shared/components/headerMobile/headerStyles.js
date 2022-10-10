import styled from "styled-components"

const Container = styled.header`
  width: 100vw;
  background-color: #fff;
  padding: 3px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
`

const Logo = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 56px;
    height: 56px;
  }

  h1 {
    font: normal 700 18px "Lexend", sans-serif;
    color: #000000;
  }

  span {
    color: #3f61d7;
  }
`

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 5px;

  p {
    font: normal 300 16px "Lexend", sans-serif;
    color: #000000;
  }
`

const AvatarContainer = styled.div``

export { Container, Logo, Content, AvatarContainer }
