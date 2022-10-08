import styled from "styled-components"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"

const LinkContainer = styled.div`
  width: 85%;
  padding: 5px;
  border: 1px solid #000000;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CopyIcon = styled(ContentCopyIcon)`
  cursor: pointer;
`

const Box = styled.div`
  display: flex;
  align-items: center;
`

export { LinkContainer, CopyIcon, Box }
