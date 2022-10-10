import { useEffect, useState } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import useApi from "../../hooks/useApi"
import createLink from "./api/createLink"
import useHandleRequest from "../../hooks/useHandleRequest"
import useToast from "../../hooks/useToast"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import { LinkContainer, CopyIcon, Box } from "./shareStyles"

export default function ShareDialog({ open, setOpen }) {
  const [response, fetch] = useApi()
  const [link, setLink] = useState(null)

  useToast(response)

  useHandleRequest(response, setLink)

  useEffect(() => {
    if (open) fetch(...createLink())
  }, [open])

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {"Gerar link de compartilhamento de sua coleção"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {link === null ? (
              "Gerando link..."
            ) : (
              <Box>
                <LinkContainer>
                  {`${import.meta.env.VITE_APP_URL}/shared/${link.shortUrl}`}
                </LinkContainer>
                <CopyToClipboard
                  text={`${import.meta.env.VITE_APP_URL}/shared/${
                    link.shortUrl
                  }`}
                >
                  <CopyIcon />
                </CopyToClipboard>
              </Box>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
