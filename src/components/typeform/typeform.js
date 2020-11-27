import React from 'react';
import * as typeformEmbed from '@typeform/embed';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '90vh',
    width: '100%'
  }
}));

const TypeForm = () => {
  const ref = React.useRef();

  const classes = useStyles();

  React.useEffect(() => {
    if (ref.current) {
      typeformEmbed.makeWidget(ref.current, 'https://form.typeform.com/to/iZH3YFSt');
    }
  });

  return <div ref={ref} className={classes.root} />;
};

export default TypeForm;
