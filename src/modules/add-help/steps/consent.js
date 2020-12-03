import { Box, Button, Typography } from '@material-ui/core';
import React from 'react';

const Consent = (props) => {
  const { onFinishClick, onPrevClick } = props;
  return (
    <>
      <Box mb={8}>
        <Typography variant="h1">Last Step</Typography>
        <Typography variant="body1">
          After you submit your data, we will screen your application and get back to you. By
          clicking send data you are agreeing to our services.
        </Typography>
      </Box>
      <Button variant="contained" onClick={onPrevClick} color="primary">
        Back
      </Button>
      <Button variant="contained" onClick={onFinishClick} color="primary">
        Submit
      </Button>
    </>
  );
};

export default Consent;
