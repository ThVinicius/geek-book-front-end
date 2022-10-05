import SearchNotFound from "../searchNotFound/SearchNotFound"
import { Glass } from "../../../../components/spinner/Spinners"
import Empty from "../empty/Empty"
import Row from "../row/Row"

export default function Rows({ collections, setCollections, search }) {
  if (collections?.length === 0 && search.length > 0) return <SearchNotFound />
  else if (collections === null) return <Glass />
  else if (collections.length === 0) return <Empty />

  return collections.map(row => (
    <Row row={row} setCollections={setCollections} />
  ))
}
