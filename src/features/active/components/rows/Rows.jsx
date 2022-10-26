import Row from "../row/Row"

export default function Rows({ collections, setCollections }) {
  return collections.map((row, index) => (
    <Row row={row} setCollections={setCollections} key={index} />
  ))
}
