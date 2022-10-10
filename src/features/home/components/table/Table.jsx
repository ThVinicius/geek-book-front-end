import { useEffect, useState } from "react"
import useApi from "../../../../hooks/useApi"
import getActiveUserCollections from "../../api/getActiveUserCollections"
import useToast from "../../../../hooks/useToast"
import useHandleRequest from "../../../../hooks/useHandleRequest"
import useSearch from "../../../../hooks/useSearch"
import usePersistence from "../../../../hooks/usePersistence"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { StyledTableCell } from "../../assets/tableStyles"
import Rows from "../rows/Rows"
import HandleResponse from "../../../../components/handleResponse/HandleResponse"

const emptyMessage = "Você não possui nenhuma obra ativa 😞"

export default function CustomizedTables({ search }) {
  const [collections, setCollections] = useState(null)
  const [response, fetch] = useApi()
  const { result } = useSearch(search, collections)

  usePersistence()

  useHandleRequest(response, setCollections)

  useToast(response)

  useEffect(() => {
    fetch(...getActiveUserCollections())
  }, [])

  return result === null || result === undefined || result.length === 0 ? (
    <HandleResponse
      collections={result}
      search={search}
      emptyMessage={emptyMessage}
    />
  ) : (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100 }} aria-label="customized table">
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
