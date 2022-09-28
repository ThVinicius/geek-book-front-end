import LoadingButton from '@mui/lab/LoadingButton'
import SendIcon from '@mui/icons-material/Send'

export default function SubmitButton({ name, loading }) {
  return (
    <LoadingButton
      type="submit"
      endIcon={<SendIcon />}
      loading={loading}
      loadingPosition="end"
      variant="contained"
    >
      {name}
    </LoadingButton>
  )
}
