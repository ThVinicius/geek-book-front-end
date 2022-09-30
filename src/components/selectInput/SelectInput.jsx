import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

export default function SelectInput({ label, options, value, onChange }) {
  const itens = () => {
    if (options !== null && options !== 'loading') {
      return options.map(({ id, name }, index) => (
        <MenuItem key={index} value={id}>
          {name}
        </MenuItem>
      ))
    }
  }

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
        {itens()}
      </Select>
    </FormControl>
  )
}
