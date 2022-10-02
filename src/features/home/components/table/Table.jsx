import { useEffect, useState } from 'react'
import useApi from '../../../../hooks/useApi'
import getUserCollections from '../../api/getUserCollections'
import useToast from '../../../../hooks/useToast'
import useHanleRequest from '../../hooks/useHanleRequest'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { StyledTableCell } from '../../assets/tableStyles'
import Rows from '../rows/Rows'

function createData(name, category, lastSeen) {
  return { name, category, lastSeen }
}

const rows = [
  createData('One piece', 'manga', 1061),
  createData('Black clover', 'manga', 370),
  createData('Doulou dalu', 'donghua', 221),
  createData('Kill the Dragon', 'manhua', 28),
  createData('Advanced Evolution', 'manhua', 60)
]

export default function CustomizedTables() {
  const [collections, setCollections] = useState(null)
  const [response, fetch] = useApi()

  useHanleRequest(response, setCollections)

  useToast(response)

  useEffect(() => {
    fetch(...getUserCollections())
  }, [])

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
          <Rows collections={collections} />
        </TableBody>
      </Table>
    </TableContainer>
  )
}
