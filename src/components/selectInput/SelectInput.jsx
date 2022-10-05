import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"

function SelectInput({
  label,
  options,
  value,
  onChange,
  none = true,
  minWidth = 120,
  size = null,
  onKeyUp = null,
  useRef = null
}) {
  const itens = () => {
    if (options !== null && options !== "loading") {
      return options.map(({ id, name }, index) => (
        <MenuItem key={index} value={id}>
          {name}
        </MenuItem>
      ))
    }
  }

  return (
    <FormControl sx={{ m: 1, minWidth }} size={size} onKeyUp={onKeyUp}>
      <InputLabel>{label}</InputLabel>
      <Select value={value} required onChange={onChange} label={label}>
        {none && (
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
        )}

        {itens()}
      </Select>
    </FormControl>
  )
}

export default SelectInput
