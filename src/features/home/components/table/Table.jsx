import { useEffect, useState } from 'react'
import useApi from '../../../../hooks/useApi'
import getUserCollections from '../../api/getUserCollections'
import useToast from '../../../../hooks/useToast'
import useHandleRequest from '../../../../hooks/useHandleRequest'
import useSearch from '../../../../hooks/useSearch'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { StyledTableCell } from '../../assets/tableStyles'
import Rows from '../rows/Rows'

export default function CustomizedTables({ search }) {
  const [collections, setCollections] = useState(null)
  const [response, fetch] = useApi()
  const { result } = useSearch(search, collections)

  useHandleRequest(response, setCollections)

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
          <Rows collections={result} search={search} />
        </TableBody>
      </Table>
    </TableContainer>
  )
}
