import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  border-radius: 4px;
  background-color: #ffffff;
  padding: 10px;
  box-shadow: 1px 2px 3px 0px rgba(0, 0, 0, 0.75);

  @media (max-width: 420px) {
    position: fixed;
    left: 0;
    top: 0;
    border-radius: 0;
    z-index: 2;
  }
`

export { Container }
