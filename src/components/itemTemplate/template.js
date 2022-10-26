import styled from "styled-components"

const Container = styled.div`
  padding: 20px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 1px 2px 3px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 150px;
    height: 220px;
    border-radius: 4px;
  }
`

const H1 = styled.h1`
  width: 310px;
  font: normal 700 23px "Lexend", sans-serif;
  color: #000000;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

const Content = styled.div`
  display: flex;
  gap: 9px;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;

  p {
    font: normal 500 18px "Lexend", sans-serif;
  }

  h6 {
    width: 100%;
    background-color: #0db8df;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    padding: 5px;
    font: normal 400 19px "Lexend", sans-serif;
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

export { Container, Content, Box, Info, DeleteBox, H1 }
