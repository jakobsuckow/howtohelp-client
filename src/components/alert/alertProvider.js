import React, { useState, useCallback } from "react"
import PropTypes from "prop-types"
import Snackbar from "@material-ui/core/Snackbar"
import Alert from "./alert"

export const AlertContext = React.createContext()

const AlertProvider = (props) => {
  const { children } = props

  const [notification, setNotification] = useState({
    isOpen: false,
    message: "",
  })

  const showAlert = useCallback(({ message }) => {
    setNotification({ isOpen: true, message })
  }, [])

  const hideAlert = useCallback(() => {
    setNotification((state) => ({ ...state, isOpen: false }))
  }, [])

  return (
    <AlertContext.Provider value={{ showAlert, hideAlert }}>
      <Snackbar
        open={notification.isOpen}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={hideAlert}
      >
        <Alert variant="outlined" onClose={hideAlert}>
          {notification.message}
        </Alert>
      </Snackbar>
      {children}
    </AlertContext.Provider>
  )
}

AlertProvider.propTypes = {
  children: PropTypes.node,
}

AlertProvider.defaultProps = {
  children: null,
}

export default AlertProvider
