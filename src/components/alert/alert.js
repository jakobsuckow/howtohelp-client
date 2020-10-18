import React from "react"
import PropTypes from "prop-types"
import MuiAlert from "@material-ui/lab/Alert"
import IconButton from "@material-ui/core/IconButton"
import { makeStyles } from "@material-ui/core/styles"
import { ReactComponent as SuccessIcon } from "./assets/success.svg"
import { ReactComponent as ErrorIcon } from "./assets/error.svg"
import { ReactComponent as InfoIcon } from "./assets/info.svg"
import { ReactComponent as WarningIcon } from "./assets/warning.svg"
import { ReactComponent as CloseIcon } from "./assets/close.svg"

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0),
    alignItems: "center",
    boxShadow: "0px 4px 16px rgba(205, 205, 205, 0.24)",
    backgroundColor: theme.palette.primary.main,
    border: "none",
    [theme.breakpoints.up("xs")]: {
      width: 240,
    },
    [theme.breakpoints.up("sm")]: {
      width: 516,
    },
    [theme.breakpoints.up("md")]: {
      width: "auto",
      maxWidth: 710,
    },
  },
  icon: {
    padding: theme.spacing(1, 0),
    [theme.breakpoints.up("xs")]: {
      display: "none",
    },
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
      iconMapping={{
        success: <SuccessIcon />,
        error: <ErrorIcon />,
        info: <InfoIcon />,
        warning: <WarningIcon />,
      }}
      action={
        onClose ? (
          <IconButton color="inherit" onClick={onClose}>
            <CloseIcon />
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
