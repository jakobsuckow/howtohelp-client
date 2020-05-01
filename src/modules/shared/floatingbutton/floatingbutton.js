import React from "react"
import Fab from "@material-ui/core/Fab"
import AddIcon from "@material-ui/icons/Add"
import { Link } from "react-router-dom"
import Popper from "@material-ui/core/Popper"
import Fade from "@material-ui/core/Fade"
import Paper from "@material-ui/core/Paper"

export default function FloatingButton() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [open, setOpen] = React.useState(false)
  const [placement, setPlacement] = React.useState()

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget)
    setOpen((prev) => placement !== newPlacement || !prev)
    setPlacement(newPlacement)
  }
  return (
    <>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper elevation={3}>
              <div className="mb-10">
                <Link className="px-2" to="/add-help">
                  Request Help
                </Link>
              </div>
              <div>
                <Link className="px-2" to="/add-help">
                  Offer Help
                </Link>
              </div>
            </Paper>
          </Fade>
        )}
      </Popper>
      <div
        className="absolute bottom-0 right-0 z-10 p-4"
        onClick={handleClick("top-end")}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </div>
    </>
  )
}
