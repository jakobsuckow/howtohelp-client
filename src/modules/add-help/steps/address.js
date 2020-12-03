import { Box, Button, Typography } from '@material-ui/core';
import React from 'react';
import FormInput from '../../../components/form/formInput';

const Address = (props) => {
  const { onPrevClick, onNextClick } = props;
  return (
    <>
      <Box mb={2} mt={2}>
        <Typography variant="h2">Last step: Where do you live ? </Typography>
        <Typography variant="body1">
          We will never show your exact location, but rather your approximate district
        </Typography>
      </Box>
      <FormInput name="address" lg placeholder="Type in your address" required autoFocus />
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
