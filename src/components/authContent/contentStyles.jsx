import styled from 'styled-components'

const Container = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 420px) {
    width: 100%;
    flex-direction: column;
  }

  &.logo-desktop {
    @media (max-width: 420px) {
      display: none;
    }
  }
`

export { Container }
