import LoadingButton from '@mui/lab/LoadingButton'
import SendIcon from '@mui/icons-material/Send'

function SubmitButton({ name, loading, dataCy, size = 'medium' }) {
  return (
    <LoadingButton
      data-cy={dataCy}
      type="submit"
      size={size}
      endIcon={<SendIcon />}
      loading={loading}
      loadingPosition="end"
      variant="contained"
    >
      {name}
    </LoadingButton>
  )
}

export default SubmitButton
