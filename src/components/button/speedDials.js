import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import SpeedDial from "@material-ui/lab/SpeedDial"
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon"
import SpeedDialAction from "@material-ui/lab/SpeedDialAction"
import FileCopyIcon from "@material-ui/icons/FileCopyOutlined"
import SaveIcon from "@material-ui/icons/Save"
import PrintIcon from "@material-ui/icons/Print"
import ShareIcon from "@material-ui/icons/Share"
import FavoriteIcon from "@material-ui/icons/Favorite"
import { useHistory } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  speedDial: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  speedDialIcon: {
    height: 16,
  },
}))

const actions = [
  { icon: <FileCopyIcon />, name: "Copy" },
  { icon: <SaveIcon />, name: "Save" },
  { icon: <PrintIcon />, name: "Print" },
  { icon: <ShareIcon />, name: "Share" },
  { icon: <FavoriteIcon />, name: "Like" },
]

const SpeedDials = () => {
  const history = useHistory()
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <SpeedDial
      ariaLabel="SpeedDial example"
      className={classes.speedDial}
      icon={<SpeedDialIcon className={classes.speedDialIcon} />}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
      direction="up"
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={() => history.push("/registration")}
        />
      ))}
    </SpeedDial>
  )
}

export default SpeedDials
