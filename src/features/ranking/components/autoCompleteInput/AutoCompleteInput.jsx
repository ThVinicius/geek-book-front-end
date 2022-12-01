import { useState } from 'react'
import useApi from '../../../../hooks/useApi'
import getMissing from '../../api/getMissing'
import useToast from '../../../../hooks/useToast'
import useHandleRequest from '../../../../hooks/useHandleRequest'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import CircularProgress from '@mui/material/CircularProgress'

function AutoCompleteInput({ onChange, value, select, loading }) {
  const [open, setOpen] = useState(false)
  const [options, setOptions] = useState([])
  const [response, fetch] = useApi()

  useHandleRequest(response, setOptions)

  useToast(response)

  const onOpen = () => {
    if (select !== null) {
      setOptions([{ userCollectionId: 0, name: 'Remover da posição' }])
    }

    fetch(...getMissing())

    setOpen(true)
  }

  const onClose = () => {
    setOptions([])

    setOpen(false)
  }

  return (
    <Autocomplete
      fullWidth
      disabled={loading}
      size="small"
      onChange={onChange}
      open={open}
      onOpen={onOpen}
      onClose={onClose}
      value={value}
      blurOnSelect={true}
      isOptionEqualToValue={(option, value) => option.name === value.name}
      getOptionLabel={option => option.name}
      options={options.sort((a, b) =>
        b?.category?.toString().localeCompare(a?.category?.toString())
      )}
      groupBy={option => option.category}
      loading={response === 'loading'}
      renderInput={params => (
        <TextField
          {...params}
          label="Obras disponíveis"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {response === 'loading' ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            )
          }}
        />
      )}
    />
  )
}

export default AutoCompleteInput
