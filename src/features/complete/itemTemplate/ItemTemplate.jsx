import { useState } from "react"
import DeleteIcon from "@mui/icons-material/Delete"
import IconButton from "@mui/material/IconButton"
import Tooltip from "@mui/material/Tooltip"
import DeleteModal from "../../../components/deleteModal/DeleteModal"

import { Container, Box, Content, Info, DeleteBox } from "./template"

export default function ItemTemplate({ row }) {
  const [open, setOpen] = useState(false)

  return (
    <Container>
      <h1>{row.collection.name}</h1>
      <Content>
        <img src={row.collection.poster} alt="obra" />
        <Box>
          <Info>
            <p>Tipo</p>
            <h6>{row.collection.category.name}</h6>
          </Info>
          <Info>
            <p>Status</p>
            <h6>{row.status.name}</h6>
          </Info>
          <Info>
            <p>Capítulo/episódio</p>
            <h6>{row.lastSeen}</h6>
          </Info>
          <DeleteBox>
            <Tooltip title={<p style={{ fontSize: "16px" }}>Deletar</p>}>
              <IconButton onClick={() => setOpen(true)}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </DeleteBox>
        </Box>
      </Content>
      <DeleteModal open={open} setOpen={setOpen} />
    </Container>
  )
}
