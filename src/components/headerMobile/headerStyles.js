import styled from "styled-components"

const Container = styled.header`
  width: 100vw;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`

const Menu = styled.img`
  width: 40px;
  height: 40px;
`

export { Container, Menu }
