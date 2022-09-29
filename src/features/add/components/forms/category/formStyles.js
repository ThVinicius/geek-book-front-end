import styled from 'styled-components'

const Container = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding-top: 8%;
`

const Back = styled.div`
  padding: 10px;
  font: normal 400 24px 'Roboto', sans-serif;
  text-decoration: underline;
  cursor: pointer;
`

const BoxButtons = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export { Container, Back, BoxButtons }
