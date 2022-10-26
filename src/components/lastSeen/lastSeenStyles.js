import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${props => props.justify};
  align-items: center;
  gap: 5px;
`

const H6 = styled.h6`
  padding: 5px 15px;
  border-radius: 5px;
  background-color: #0db8df;
  color: #ffffff;
  font: normal 500 18px "Poppins", sans-serif;
  cursor: pointer;
`

const Increment = styled.button`
  padding: 0px 15px;
  border-radius: 7px;
  background-color: green;
  color: #ffffff;
  font: normal 500 25px "Poppins", sans-serif;
  cursor: pointer;
`

const Decrement = styled.button`
  padding: 0px 15px;
  border-radius: 7px;
  background-color: red;
  color: #ffffff;
  font: normal 500 25px "Poppins", sans-serif;
  cursor: pointer;
`

export { Container, H6, Increment, Decrement }
