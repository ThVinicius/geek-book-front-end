import * as React from "react"
import useApi from "../../hooks/useApi"
import removeCollection from "../../features/home/api/removeCollection"
import useToast from "../../hooks/useToast"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import Slide from "@mui/material/Slide"

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

function DeleteModal({ open, setOpen, name, setCollections, id }) {
  const [response, fetch] = useApi()

  useToast(response)

  const handleClose = () => {
    setOpen(false)
  }

  const remove = () => {
    setCollections(prev => prev.filter(item => item.id !== id))

    setOpen(false)

    fetch(...removeCollection(id))
  }

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        <DialogTitle>{"Confirme a ação de deletar"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            O registro {name} será apagado!
            <br />
            Você confirma essa ação?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={remove}>Deletar</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default DeleteModal
