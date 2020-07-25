import React from "react"
import PropTypes from "prop-types"
import MuiAlert from "@material-ui/lab/Alert"
import IconButton from "@material-ui/core/IconButton"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0),
    alignItems: "center",
    boxShadow: "0px 4px 16px rgba(205, 205, 205, 0.24)",
    backgroundColor: `#ffffff`,
    border: "none",
    [theme.breakpoints.up("xs")]: {
      width: 321,
    },
    [theme.breakpoints.up("sm")]: {
      width: 516,
    },
    [theme.breakpoints.up("md")]: {
      width: "auto",
      minWidth: 516,
      maxWidth: 710,
    },
  },
  icon: {
    padding: theme.spacing(1, 0),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(2, 0),
    },
  },
  message: (props) => ({
    fontSize: 12,
    lineHeight: "18px",
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(2, 0),
      fontSize: 16,
      lineHeight: "24px",
    },
    padding: theme.spacing(1, 0),
  }),
  action: {
    paddingRight: theme.spacing(1),
  },
}))

const Alert = (props) => {
  const { severity, onClose, ...rest } = props

  const classes = useStyles({ severity })

  return (
    <MuiAlert
      classes={classes}
      severity={severity}
      iconMapping={{}}
      action={
        onClose ? (
          <IconButton color="inherit" onClick={onClose}>
            x
          </IconButton>
        ) : null
      }
      {...rest}
    />
  )
}

Alert.propTypes = {
  onClose: PropTypes.func,
}

Alert.defaultProps = {
  onClose: null,
}

export default Alert
