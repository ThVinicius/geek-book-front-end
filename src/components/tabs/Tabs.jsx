import * as React from "react"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"

export default function BasicTabs() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Todos" />
        <Tab label="Mangás" />
        <Tab label="Animes" />
        <Tab label="Manhuas" />
        <Tab label="Donghuas" />
        <Tab label="Novels" />
      </Tabs>
    </Box>
  )
}
