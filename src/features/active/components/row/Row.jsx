import { useState } from "react"
import { StyledTableCell, StyledTableRow } from "../../assets/tableStyles"
import Tooltip from "@mui/material/Tooltip"
import Zoom from "@mui/material/Zoom"
import Button from "@mui/material/Button"
import TooltipContent from "../tooltipContent/TooltipContent"
import DeleteIcon from "@mui/icons-material/Delete"
import IconButton from "@mui/material/IconButton"
import LastSeen from "../../../../components/lastSeen/LastSeen"
import DeleteModal from "../../../../components/deleteModal/DeleteModal"
import Status from "../../../../components/status/Status"
import { H6 } from "./rowStyle"

export default function Row({ row, setCollections }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <StyledTableRow key={row.collection.name}>
        <StyledTableCell component="th" scope="row">
          <Tooltip
            TransitionComponent={Zoom}
            title={
              <TooltipContent
                poster={row.collection.poster}
                synopsis={row.collection.synopsis}
              />
            }
            arrow
          >
            <Button>{row.collection.name}</Button>
          </Tooltip>
        </StyledTableCell>
        <StyledTableCell align="right">
          <H6>{row.collection.category.name}</H6>
        </StyledTableCell>
        <StyledTableCell align="center">
          <Status row={row} />
        </StyledTableCell>
        <StyledTableCell align="right">
          <LastSeen
            lastSeen={row.lastSeen}
            setCollections={setCollections}
            collectionId={row.collection.id}
          />
        </StyledTableCell>
        <StyledTableCell align="right">
          <Tooltip title={<p style={{ fontSize: "16px" }}>Deletar</p>}>
            <IconButton onClick={() => setOpen(true)}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </StyledTableCell>
      </StyledTableRow>
      <DeleteModal
        open={open}
        setOpen={setOpen}
        id={row.id}
        name={row.collection.name}
        setCollections={setCollections}
      />
    </>
  )
}
