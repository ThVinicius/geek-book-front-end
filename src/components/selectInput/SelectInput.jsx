import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

export default function SelectInput({ label, value, onChange }) {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-autowidth-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        value={value}
        required
        onChange={onChange}
        label={label}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="manga">Mangá</MenuItem>
        <MenuItem value="anime">Anime</MenuItem>
        <MenuItem value="manhua">Manhua</MenuItem>
        <MenuItem value="donghua">Donghua</MenuItem>
        <MenuItem value="serie">Série</MenuItem>
      </Select>
    </FormControl>
  )
}
