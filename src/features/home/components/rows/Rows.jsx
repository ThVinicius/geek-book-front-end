import Row from "../row/Row"

export default function Rows({ collections, setCollections }) {
  return collections.map(row => (
    <Row row={row} setCollections={setCollections} />
  ))
}
