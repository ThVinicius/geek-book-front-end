import styled from 'styled-components'

const Container = styled.div`
  width: 50%;
  background-color: #ffffff;
  border-radius: 5px;
  display: flex;
  cursor: pointer;

  :hover {
    background-color: #f3f4fa;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }

  div {
    padding: 20px;
    border-right: 1px solid #bfc2d4;
    display: flex;
    align-items: center;
  }

  span {
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 420px) {
    width: 80%;
  }
`

export { Container }
