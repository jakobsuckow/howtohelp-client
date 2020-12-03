import { Box, Button, Typography } from '@material-ui/core';
import React from 'react';
import FormInput from '../../../components/form/formInput';

const Name = (props) => {
  const { onPrevClick, onNextClick } = props;

  const keyPress = (e) => {
    if (e.keyCode === 13) {
      return onNextClick();
    }
  };
  return (
    <>
      <Box mb={2} mt={8}>
        <Typography variant="h2">Lets start, what is your name ?</Typography>
        <Typography variant="body1">We only need your first name</Typography>
      </Box>
      <FormInput
        name="name"
        lg
        placeholder="Enter your first Name"
        required
        autoFocus
        minLength={4}
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

export default Name;
