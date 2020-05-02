import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "react-router-dom"

const ToolTipMenu = (props) => {
  const { message, open } = props
  const useStyles = makeStyles({
    root: {
      position: "absolute",
      bottom: "80px",
      right: "10px",
      zIndex: "10",
    },
    menuItem: {
      display: open ? "block" : "none",
      backgroundColor: "rgba(0,0,0,0.7)",
      boxShadow:
        "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
      color: "white",
      marginBottom: "8px",
      padding: "4px",
      borderRadius: "4px",
    },
  })
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <ul>
        <li className={classes.menuItem}>
          <Link to="/add-help">Offer Help</Link>
        </li>
        <li className={classes.menuItem}>
          <Link to="/add-help">Request Help</Link>
        </li>
      </ul>
    </div>
  )
}

export default ToolTipMenu
