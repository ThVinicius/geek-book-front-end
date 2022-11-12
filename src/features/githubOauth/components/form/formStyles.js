import styled from 'styled-components'

const Container = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  h2 {
    text-align: center;
    font: normal 500 18px 'Lexend', sans-serif;
  }
`

const Box = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 420px) {
    width: 100%;
    flex-direction: column;
    gap: 30px;
  }
`

export { Container, Box }
