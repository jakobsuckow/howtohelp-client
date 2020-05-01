import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '../notification/Alert';

export const AlertContext = React.createContext();

const AlertProvider = (props) => {
  const { children } = props;

  const [notification, setNotification] = useState({
    isOpen: false,
    severity: '',
    message: '',
  });

  const showAlert = ({ severity, message }) => {
    setNotification({ isOpen: true, severity, message });
  };

  const hideAlert = () => {
    setNotification({ isOpen: false, severity: '', message: '' });
  };

  return (
    <AlertContext.Provider value={{ showAlert, hideAlert }}>
      <Snackbar
        open={notification.isOpen}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={hideAlert}
      >
        <Alert
          variant="outlined"
          severity={notification.severity || 'error'}
          onClose={hideAlert}
        >
          {notification.message}
        </Alert>
      </Snackbar>
      {children}
    </AlertContext.Provider>
  );
};

AlertProvider.propTypes = {
  children: PropTypes.node,
};

AlertProvider.defaultProps = {
  children: null,
};

export default AlertProvider;
