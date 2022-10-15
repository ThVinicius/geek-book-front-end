import { useEffect, useRef, useState } from "react"
import useApi from "../../hooks/useApi"
import request from "./request"
import useToast from "../../hooks/useToast"
import useHandleRequest from "../../hooks/useHandleRequest"
import Stack from "@mui/material/Stack"
import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"
import CircularProgress from "@mui/material/CircularProgress"

export default function AutoComplete({
  label,
  value,
  onChange,
  category,
  loading,
  options,
  setOptions
}) {
  const loadingRef = useRef(loading)
  const [response, fetch] = useApi()

  useHandleRequest(response, setOptions, loadingRef)

  useToast(response)

  useEffect(() => {
    if (category !== "") {
      setOptions([])

      fetch(...request(category))
    }
  }, [category])

  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        value={value}
        onChange={onChange}
        autoSelect
        freeSolo
        options={options.map(option => option.name)}
        loading={loadingRef.current}
        renderInput={params => (
          <TextField
            {...params}
            label={label}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loadingRef.current ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </>
              )
            }}
          />
        )}
      />
    </Stack>
  )
}
