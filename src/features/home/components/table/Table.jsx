import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import TooltipContent from '../tooltipContent/TooltipContent'
import LastSeen from '../lastSeen/LastSeen'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}))

function createData(name, category, lastSeen) {
  return { name, category, lastSeen }
}

const rows = [
  createData('One piece', 'manga', 1061),
  createData('Black clover', 'manga', 370),
  createData('Doulou dalu', 'donghua', 221),
  createData('Kill the Dragon', 'manhua', 28),
  createData('Advanced Evolution', 'manhua', 60),
  createData('One piece', 'manga', 1061),
  createData('Black clover', 'manga', 370),
  createData('Doulou dalu', 'donghua', 221),
  createData('Kill the Dragon', 'manhua', 28),
  createData('Advanced Evolution', 'manhua', 60)
]

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nome</StyledTableCell>
            <StyledTableCell align="right">Categoria</StyledTableCell>
            <StyledTableCell align="right">
              Último capítulo/episódio visto
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                <Tooltip title={<TooltipContent />} arrow>
                  <Button>{row.name}</Button>
                </Tooltip>
              </StyledTableCell>
              <StyledTableCell align="right">{row.category}</StyledTableCell>
              <StyledTableCell align="right">
                <LastSeen lastSeen={row.lastSeen} />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
