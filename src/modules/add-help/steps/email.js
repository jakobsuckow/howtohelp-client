import { Box, Button, Typography } from '@material-ui/core';
import React from 'react';
import FormInput from '../../../components/form/formInput';

const Email = (props) => {
  const { onPrevClick, onNextClick } = props;

  const keyPress = (e) => {
    if (e.keyCode === 13) {
      return onNextClick();
    }
  };
  return (
    <>
      <Box mb={2}>
        <Typography variant="h2">How can we reach you ?</Typography>
        <Typography variant="body1">Your email address will never be made public</Typography>
      </Box>
      <FormInput
        name="email"
        lg
        placeholder="Whats your email address"
        required
        autoFocus
        type="email"
        pressEnter={keyPress}
      />
      <Button onClick={onPrevClick} variant="contained" color="primary">
        Previous
      </Button>
      <Button onClick={onNextClick} variant="contained" color="primary">
        Next
      </Button>
    </>
  );
};

export default Email;
