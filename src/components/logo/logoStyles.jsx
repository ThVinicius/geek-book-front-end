import styled from "styled-components"

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: ${props => props.imgSize};
    height: ${props => props.imgSize};
  }

  h1 {
    font: normal 700 36px "Lexend", sans-serif;
    font-size: ${props => props.fontSize};
    color: #000000;
  }

  span {
    color: #3f61d7;
  }

  &.logo-mobile {
    display: none;

    @media (max-width: 420px) {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-bottom: 40px;
    }
  }
`
export { Container }
