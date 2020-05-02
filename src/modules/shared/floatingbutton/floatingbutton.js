import React from "react"
import Fab from "@material-ui/core/Fab"
import AddIcon from "@material-ui/icons/Add"
import ClickAwayListener from "@material-ui/core/ClickAwayListener"

import { makeStyles } from "@material-ui/core/styles"
import ToolTipMenu from "./tooltipMenu"

const useStyles = makeStyles({
  popup: {
    marginBottom: "40px",
  },
  fab: {
    position: "absolute",
    bottom: 0,
    right: 0,
    zIndex: 10,
    padding: "10px",
    background: "#DA5E50",
    color: "white",
  },
})

export default function FloatingButton() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const toggleOpen = () => {
    setOpen(!open)
  }

  return (
    <>
      <ClickAwayListener
        onClickAway={() => {
          setOpen(false)
        }}
      >
        <ToolTipMenu open={open} />
      </ClickAwayListener>

      <Fab
        color="primary"
        aria-label="add"
        className={classes.fab}
        onClick={toggleOpen}
      >
        <AddIcon />
      </Fab>
    </>
  )
}
