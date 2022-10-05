import styled from "styled-components"

const Container = styled.form`
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background-color: #ffffff;
`

const Back = styled.div`
  padding: 10px;
  font: normal 400 24px "Roboto", sans-serif;
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
