import { StyledTableCell, StyledTableRow } from '../../assets/tableStyles'
import Tooltip from '@mui/material/Tooltip'
import Zoom from '@mui/material/Zoom'
import Button from '@mui/material/Button'
import TooltipContent from '../tooltipContent/TooltipContent'
import LastSeen from '../lastSeen/LastSeen'
import Empty from '../empty/Empty'
import SearchNotFound from '../searchNotFound/SearchNotFound'
import { Glass } from '../../../../components/spinner/Spinners'

export default function Rows({ collections, search }) {
  if (collections?.length === 0 && search.length > 0) return <SearchNotFound />
  else if (collections === null) return <Glass />
  else if (collections.length === 0) return <Empty />

  return collections.map(row => (
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
        {row.collection.category.name}
      </StyledTableCell>
      <StyledTableCell align="right">
        <LastSeen lastSeen={row.lastSeen} collectionId={row.collection.id} />
      </StyledTableCell>
    </StyledTableRow>
  ))
}
