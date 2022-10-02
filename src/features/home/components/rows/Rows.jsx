import { StyledTableCell, StyledTableRow } from '../../assets/tableStyles'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import TooltipContent from '../tooltipContent/TooltipContent'
import LastSeen from '../lastSeen/LastSeen'
import Empty from '../empty/Empty'
import { Glass } from '../../../../components/spinner/Spinners'

export default function Rows({ collections }) {
  if (collections === null) return <Glass />
  else if (collections.length === 0) return <Empty />

  return collections.map(row => (
    <StyledTableRow key={row.collection.name}>
      <StyledTableCell component="th" scope="row">
        <Tooltip
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
        <LastSeen lastSeen={row.lastSeen} />
      </StyledTableCell>
    </StyledTableRow>
  ))
}
