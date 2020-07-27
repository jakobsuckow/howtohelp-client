import React from "react"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import Button from "@material-ui/core/Button"
import useMediaQuery from "@material-ui/core/useMediaQuery"

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
})

export default function Drawer() {
  const matches = useMediaQuery("(min-width:600px)")
  const isMobile = () => {
    if (matches) {
      return `left`
    } else {
      return `bottom`
    }
  }
  const classes = useStyles()
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      hi
    </div>
  )

  return (
    <div>
      <Button onClick={toggleDrawer(isMobile(), true)}>Open</Button>
      <SwipeableDrawer
        anchor={isMobile()}
        open={state[isMobile()]}
        onClose={toggleDrawer(isMobile(), false)}
        onOpen={toggleDrawer(isMobile(), true)}
      >
        {list(isMobile())}
      </SwipeableDrawer>
    </div>
  )
}
