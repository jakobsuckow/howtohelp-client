import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import SpeedDial from "@material-ui/lab/SpeedDial"
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon"
import SpeedDialAction from "@material-ui/lab/SpeedDialAction"

import { useHistory } from "react-router-dom"
import { ReactComponent as HelpIconSvg } from "./assets/needhelp.svg"
import { ReactComponent as HeartIconSvg } from "./assets/hearticon.svg"
import { GlobalDataContext } from "../../modules/shared/app/globalDataProvider"

const useStyles = makeStyles((theme) => ({
  speedDial: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  actionIcon: {
    background: "none",
    boxShadow: "none",
    "&:hover": {
      background: "none",
      boxShadow: "none",
    },
  },
}))

const SpeedDials = () => {
  const { setModal } = React.useContext(GlobalDataContext)
  const history = useHistory()
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const toggle = () => {
    setOpen(!open)
  }

  const actions = [
    { icon: <HelpIconSvg />, name: "I need help", route: "gethelp" },
    {
      icon: <HeartIconSvg />,
      name: "I want to help",
      route: "providehelp",
    },
  ]

  return (
    <SpeedDial
      ariaLabel="Menu"
      className={classes.speedDial}
      icon={<SpeedDialIcon className={classes.speedDialIcon} />}
      onClick={toggle}
      open={open}
      direction="up"
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          tooltipOpen
          className={classes.actionIcon}
          onClick={() =>
            setModal({
              open: true,
              message: action.route,
            })
          }
        />
      ))}
    </SpeedDial>
  )
}

export default SpeedDials
