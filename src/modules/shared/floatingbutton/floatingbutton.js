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
    bottom: "16px",
    right: "16px",
    zIndex: 10,
    padding: "10px",
    color: "white",
  },
  addIcon: {
    transform: `rotate(45deg)`,
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
        <AddIcon className={classes.addIcon} />
      </Fab>
    </>
  )
}
