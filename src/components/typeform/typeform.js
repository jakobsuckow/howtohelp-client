import React from 'react';
import * as typeformEmbed from '@typeform/embed';
import { makeStyles } from '@material-ui/core';
import { GlobalDataContext } from '../../modules/shared/app/globalDataProvider';
import { AlertContext } from '../alert/alertProvider';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '90vh',
    width: '100%'
  }
}));

const TypeForm = () => {
  const { showAlert } = React.useContext(AlertContext);
  const { setModal } = React.useContext(GlobalDataContext);

  const handleSubmit = React.useCallback(() => {
    setTimeout(() => {
      showAlert({
        message: 'Thanks for your submission'
      });
      setModal({
        open: false
      });
    }, [400]);
  }, [showAlert, setModal]);

  const ref = React.useRef();

  const classes = useStyles();

  React.useEffect(() => {
    if (ref.current) {
      typeformEmbed.makeWidget(ref.current, process.env.REACT_APP_TYPEFORM_LINK, {
        onReady: () => {
          console.log(`Typeform ready`);
        },
        onSubmit: () => {
          handleSubmit();
        },
        onScreenChanged: () => {
          console.log(`screen changed`);
        }
      });
    }
  });

  return <div ref={ref} className={classes.root} />;
};

export default TypeForm;
