import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Card from "../../../../components/card/Card"

export default function BasicTabs({ value, onChange }) {
  const handleChange = (event, newValue) => {
    onChange(newValue)
  }

  return (
    <Card>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Coleção" />
        <Tab label="Ranking" />
      </Tabs>
    </Card>
  )
}
