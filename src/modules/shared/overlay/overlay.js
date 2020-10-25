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
import AddHelp from "../../add-help/addHelp"
import { GlobalDataContext } from "../app/globalDataProvider"

const useStyles = makeStyles((theme) => ({
  paper: {
    zIndex: 10000,
    position: "absolute",
    height: "100vh",
    width: "100vw",
    boxShadow: "none",
  },
}))
const Overlay = () => {
  const { modal, setModal } = React.useContext(GlobalDataContext)
  const classes = useStyles()
  return (
    <Slide
      direction="up"
      in={modal.open}
      mountOnEnter
      unmountOnExit
      timeout={{ enter: 500, exit: 500 }}
    >
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
          {modal.message === "providehelp" && <AddHelp />}
          {modal.message === "gethelp" && (
            <Typography variant="h2">Get Help</Typography>
          )}
        </Container>
      </Paper>
    </Slide>
  )
}

export default Overlay
