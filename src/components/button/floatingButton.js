import React from "react"
import Fab from "@material-ui/core/Fab"
import AddIcon from "@material-ui/icons/Add"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  popup: {
    marginBottom: "40px",
  },
  fab: {
    position: "absolute",
    bottom: "16px",
    right: "16px",
    zIndex: 10,
    padding: "10px",
    color: "white",
  },
})

const FloatingButton = () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const toggleOpen = () => {
    setOpen(!open)
  }

  return (
    <>
      <Fab
        color="primary"
        aria-label="add"
        className={classes.fab}
        onClick={toggleOpen}
        style={{ transform: `${open ? `rotate(45deg)` : ``}` }}
      >
        <AddIcon />
      </Fab>
    </>
  )
}

export default FloatingButton
