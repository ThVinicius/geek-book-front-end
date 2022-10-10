import styled from "styled-components"

const Container = styled.div`
  width: 40vw;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Header = styled.div`
  padding: 20px 0;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const List = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;

  a {
    text-decoration: none;
    color: inherit;
  }
`

const Footer = styled.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

const Logout = styled.p`
  font: normal 700 18px "Lexend", sans-serif;
  cursor: pointer;
`

export { Container, Header, List, Footer, Logout, Content }
