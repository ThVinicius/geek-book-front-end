import { useState } from "react"
import useApi from "../../../../hooks/useApi"
import getMissing from "../../api/getMissing"
import useToast from "../../../../hooks/useToast"
import useHandleRequest from "../../../../hooks/useHandleRequest"
import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"
import CircularProgress from "@mui/material/CircularProgress"

function AutoCompleteInput({ onChange, select, loading }) {
  const [open, setOpen] = useState(false)
  const [options, setOptions] = useState([])
  const [response, fetch] = useApi()

  useHandleRequest(response, setOptions)

  useToast(response)

  const onOpen = () => {
    fetch(...getMissing())

    if (select !== null) {
      setOptions([{ userCollectionId: 0, name: "Remover da posição" }])
    }

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
      isOptionEqualToValue={(option, value) => option.name === value.name}
      getOptionLabel={option => option.name}
      options={options}
      loading={response === "loading"}
      renderInput={params => (
        <TextField
          {...params}
          label="Obras disponíveis"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {response === "loading" ? (
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
