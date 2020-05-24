import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import LocalAtmOutlinedIcon from "@material-ui/icons/LocalAtmOutlined"
import AccessibilityNewOutlinedIcon from "@material-ui/icons/AccessibilityNewOutlined"
import EditLocationOutlinedIcon from "@material-ui/icons/EditLocationOutlined"
import { Link } from "react-router-dom"
import { Fab, Typography, Box, Grid } from "@material-ui/core"

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
          <Grid container spacing={3} >
            <Grid item xs={6}>
              <Link to="/add-help">
                <Typography className={classes.buttonHeading}>
                  Finance
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={6}>
              <Link to="/add-help">
                <Fab color="primary" aria-label="add" className={classes.fab}>
                  <LocalAtmOutlinedIcon />
                </Fab>
              </Link>
            </Grid>
          </Grid>
        </li>
        <li className={classes.menuItem}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Link to="/add-help">
                <Typography className={classes.buttonHeading}>Help</Typography>
              </Link>
            </Grid>
            <Grid item xs={6}>
              <Link to="/add-help">
                <Fab color="primary" aria-label="add" className={classes.fab}>
                  <AccessibilityNewOutlinedIcon />
                </Fab>
              </Link>
            </Grid>
          </Grid>
        </li>
        <li className={classes.menuItem}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Link to="/add-help">
                <Typography className={classes.buttonHeading}>
                  I need Help
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={6}>
              <Link to="/add-help">
                <Fab color="primary" className={classes.fab}>
                  <EditLocationOutlinedIcon />
                </Fab>
              </Link>
            </Grid>
          </Grid>
        </li>
      </ul>
    </div>
  )
}

export default ToolTipMenu
