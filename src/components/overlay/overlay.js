import {
  Box,
  Button,
  Container,
  makeStyles,
  Paper,
  Slide,
  Typography,
} from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"
import React from "react"
import Registration from "../../modules/registration/registration"
import { GlobalDataContext } from "../../modules/shared/app/globalDataProvider"

const useStyles = makeStyles((theme) => ({
  paper: {
    zIndex: 10000,
    position: "absolute",
    height: "100vh",
    width: "100vw",
  },
}))
const Overlay = () => {
  const { modal, setModal } = React.useContext(GlobalDataContext)
  const classes = useStyles()
  return (
    <Slide direction="up" in={modal.open} mountOnEnter unmountOnExit>
      <Paper elevation={4} className={classes.paper}>
        <Container>
          <Box mt={4}>
            <Button
              variant="outlined"
              onClick={() =>
                setModal({
                  open: false,
                })
              }
              startIcon={<CloseIcon />}
            >
              Close
            </Button>
          </Box>
          {modal.message === "providehelp" && <Registration />}
          {modal.message === "gethelp" && (
            <Typography variant="h2">Get Help</Typography>
          )}
        </Container>
      </Paper>
    </Slide>
  )
}

export default Overlay
