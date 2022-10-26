import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { StyledTableCell } from "../../assets/tableStyles"
import Rows from "../rows/Rows"

export default function CustomizedTables({ result, setCollections, search }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100 }} size="small">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nome</StyledTableCell>
            <StyledTableCell align="right">Categoria</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Capítulo/episódio</StyledTableCell>
            <StyledTableCell align="right">Deletar</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <Rows
            collections={result}
            setCollections={setCollections}
            search={search}
          />
        </TableBody>
      </Table>
    </TableContainer>
  )
}
