import { Typography } from '@material-ui/core';
import React from 'react';

const InputError = (props) => {
  const { error } = props;
  return (
    <Typography component="p" variant="body2" color="error">
      {error?.message}
    </Typography>
  );
};

export default InputError;
