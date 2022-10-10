import styled from "styled-components"

const Container = styled.header`
  width: 100%;
  padding: 10px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  gap: 15px;

  a {
    text-decoration: none;
  }
`

const UserContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font: normal 400 18px "Lexend", sans-serif;
  }
`

export { Container, UserContainer }
