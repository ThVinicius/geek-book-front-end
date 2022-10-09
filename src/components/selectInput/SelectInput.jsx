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
  size = null,
  onKeyUp,
  focused,
  autoWidth
}) {
  const itens = () => {
    if (options !== null && options !== "loading") {
      return options.map(({ id, name, collection }, index) => (
        <MenuItem key={index} value={id}>
          {collection?.name || name}
        </MenuItem>
      ))
    }
  }

  return (
    <FormControl
      onKeyUp={onKeyUp}
      sx={{ m: 1, minWidth: autoWidth ? 0 : 120 }}
      focused={focused}
      size={size}
      autoWidth={autoWidth}
    >
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        required
        onChange={onChange}
        label={label}
        open={focused}
      >
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
