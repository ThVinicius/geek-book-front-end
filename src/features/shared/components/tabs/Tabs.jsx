import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import { Container } from "../../../../containers/search/searchStyles"

export default function BasicTabs({ value, onChange }) {
  const handleChange = (event, newValue) => {
    onChange(newValue)
  }

  return (
    <Container>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Coleção" />
        <Tab label="Ranking" />
      </Tabs>
    </Container>
  )
}
