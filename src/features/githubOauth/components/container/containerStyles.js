import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
`

const Content = styled.div`
  width: 80%;
  border-radius: 4px;
  background-color: #ffffff;
  padding: 10px;
  box-shadow: 1px 2px 3px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  h1 {
    text-align: center;
    font: normal 500 18px 'Lexend', sans-serif;
  }

  @media (max-width: 420px) {
    width: 95%;
  }
`

export { Container, Content }
