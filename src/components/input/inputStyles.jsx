import styled from "styled-components"
import TextField from "@mui/material/TextField"

const Container = styled(TextField)`
  background-color: #ffffff;
  border-radius: 4px;
  width: ${props => props.width};
`

export { Container }
