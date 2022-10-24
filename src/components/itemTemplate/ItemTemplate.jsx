import { useState } from "react"
import DeleteIcon from "@mui/icons-material/Delete"
import IconButton from "@mui/material/IconButton"
import Tooltip from "@mui/material/Tooltip"
import DeleteModal from "../deleteModal/DeleteModal"
import Status from "../status/Status"
import LastSeen from "../lastSeen/LastSeen"
import { Container, Box, Content, Info, DeleteBox } from "./template"

function ItemTemplate({ row, setCollections, modify = true, control = false }) {
  const [open, setOpen] = useState(false)

  return (
    <Container>
      <Tooltip
        title={
          <h2 style={{ fontSize: "18px" }}>
            {row.name || row.collection.name}
          </h2>
        }
        arrow
        placement="top"
      >
        <h1>{row.name || row.collection.name}</h1>
      </Tooltip>
      <Content>
        <img src={row.poster || row.collection.poster} alt="obra" />
        <Box>
          <Info>
            <p>Categoria</p>
            <h6>{row.category || row.collection.category.name}</h6>
          </Info>
          <Info>
            <p>Status</p>
            <Status row={row} modify={modify} />
          </Info>
          <Info>
            <p>Capítulo/episódio</p>
            <LastSeen
              control={control}
              lastSeen={row.lastSeen}
              setCollections={setCollections}
              collectionId={row.collection?.id}
              justify="start"
              modify={modify}
            />
          </Info>
          {modify && (
            <DeleteBox>
              <Tooltip title={<p style={{ fontSize: "16px" }}>Deletar</p>}>
                <IconButton onClick={() => setOpen(true)}>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </DeleteBox>
          )}
        </Box>
      </Content>
      {modify && (
        <DeleteModal
          open={open}
          setOpen={setOpen}
          name={row.collection.name}
          setCollections={setCollections}
          id={row.id}
        />
      )}
    </Container>
  )
}

export default ItemTemplate
