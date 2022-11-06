import styled from 'styled-components'
import HelpIcon from '@mui/icons-material/Help'

const InputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`

const Help = styled(HelpIcon)`
  cursor: help;
`

const HelpText = styled.h6`
  white-space: pre-line;
  font: normal 700 18px 'Lexend', sans-serif;
`

export { InputBox, Help, HelpText }
