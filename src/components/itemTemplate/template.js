import styled from "styled-components"

const Container = styled.div`
  padding: 20px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 1px 2px 3px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font: normal 700 23px "Lexend", sans-serif;
    color: #000000;
  }

  img {
    width: 150px;
    height: 220px;
    border-radius: 4px;
  }
`
const Content = styled.div`
  display: flex;
  gap: 9px;
`

const Info = styled.div`
  p {
    font: normal 500 18px "Lexend", sans-serif;
  }

  h6 {
    font: normal 300 18px "Lexend", sans-serif;
  }
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 9px;
`

const DeleteBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`

export { Container, Content, Box, Info, DeleteBox }
