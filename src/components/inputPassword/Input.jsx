import { useState } from 'react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { Container } from './inputStyles'

export default function InputPassword(props) {
  const { label, value, onChange, dataCy, size = 'medium' } = props

  const [showPassword, setShowPassword] = useState(false)

  return (
    <FormControl sx={{ width: '75%' }} required variant="outlined" size={size}>
      <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
      <Container
        data-cy={dataCy}
        type={showPassword ? 'text' : 'password'}
        required
        value={value}
        onChange={onChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShowPassword(!showPassword)}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  )
}
