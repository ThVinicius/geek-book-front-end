import styled from 'styled-components'

const Container = styled.div`
  padding: 15px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 1px 2px 3px 0px rgba(0, 0, 0, 0.75);
  font: normal 500 30px 'Lexend', sans-serif;
  color: #000000;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 420px) {
    padding: 0px;
  }
`

const H1 = styled.h1`
  font: normal 500 30px 'Lexend', sans-serif;
  color: #000000;

  @media (max-width: 420px) {
    padding-left: 15px;
  }
`

const Box = styled.div`
  width: 100%;

  @media (max-width: 420px) {
    padding: 0px 15px;
  }
`

const Img = styled.img`
  width: 376.917px;
  height: 289px;

  @media (max-width: 420px) {
    width: 336.917px;
    height: 346px;
  }
`

export { Container, Img, H1, Box }
