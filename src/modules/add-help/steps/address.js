import { Box, Button, Typography } from '@material-ui/core';
import React from 'react';
import FormInput from '../../../components/form/formInput';

const Address = (props) => {
  const { onPrevClick, onNextClick } = props;

  const keyPress = (e) => {
    if (e.keyCode === 13) {
      return onNextClick();
    }
  };
  return (
    <>
      <Box mb={2}>
        <Typography variant="h2">Last step: Where do you live ? </Typography>
        <Typography variant="body1">
          We will never show your exact location, but rather your approximate district
        </Typography>
      </Box>
      <FormInput
        name="address"
        lg
        placeholder="Type in your address"
        required
        autoFocus
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

export default Address;
