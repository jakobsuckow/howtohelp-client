import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import LocalAtmOutlinedIcon from "@material-ui/icons/LocalAtmOutlined"
import AccessibilityNewOutlinedIcon from "@material-ui/icons/AccessibilityNewOutlined"
import EditLocationOutlinedIcon from "@material-ui/icons/EditLocationOutlined"
import { Link } from "react-router-dom"
import PeopleSVG from "../icons/people"
import { Fab, Typography } from "@material-ui/core"

const ToolTipMenu = (props) => {
  const { open } = props
  const useStyles = makeStyles({
    root: {
      position: "absolute",
      bottom: "80px",
      right: "10px",
      zIndex: "10",
    },
    buttonHeading: {},
    fab: {},
    menuItem: {
      display: open ? "block" : "none",
      color: "white",
      marginBottom: "24px",
      padding: "4px",
    },
  })
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <ul>
        <li className={classes.menuItem}>
          <Link to="/add-help">
            <Typography className={classes.buttonHeading}>Finance</Typography>
            <Fab color="primary" aria-label="add" className={classes.fab}>
              <LocalAtmOutlinedIcon />
            </Fab>
          </Link>
        </li>
        <li className={classes.menuItem}>
          <Link to="/add-help">
            <Typography className={classes.buttonHeading}>Help</Typography>

            <Fab color="primary" aria-label="add" className={classes.fab}>
              <AccessibilityNewOutlinedIcon />
            </Fab>
          </Link>
        </li>
        <li className={classes.menuItem}>
          <Link to="/add-help">
            <Typography className={classes.buttonHeading}>
              I need Help
            </Typography>
            <Fab color="primary" className={classes.fab}>
              <EditLocationOutlinedIcon />
            </Fab>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default ToolTipMenu
