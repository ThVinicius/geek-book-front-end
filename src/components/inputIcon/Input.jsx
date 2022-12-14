import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import InputAdornment from "@mui/material/InputAdornment"
import IconButton from "@mui/material/IconButton"
import { Container } from "./inputStyles"

export default function InputIcon(props) {
  const { label, value, onChange, icon, onKeyUp = null } = props
  const { autoFocus = false, number = false } = props

  return (
    <FormControl sx={{ width: "150px" }} size="small" variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
      <Container
        type="text"
        label={label}
        value={value}
        onChange={onChange}
        onKeyUp={onKeyUp}
        autoFocus={autoFocus}
        inputProps={
          number && { inputmode: "numeric", pattern: "[0-9]*[.]?[0-9]*" }
        }
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="toggle password visibility" edge="end">
              {icon}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  )
}
