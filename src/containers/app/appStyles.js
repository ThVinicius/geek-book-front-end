import styled from "styled-components"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: #ffffff;
  display: flex;
  padding: 10px;
  background: #7f7fd5; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #91eae4,
    #86a8e7,
    #7f7fd5
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #91eae4,
    #86a8e7,
    #7f7fd5
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  @media (max-width: 420px) {
    padding-top: 90px;
  }
`

export { Container }
