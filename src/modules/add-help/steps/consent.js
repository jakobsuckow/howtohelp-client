import { Box, Button, Typography } from '@material-ui/core';
import React from 'react';

const Consent = (props) => {
  const { onFinishClick, onPrevClick } = props;
  return (
    <>
      <Box mb={2} mt={2}>
        <Typography variant="h1">Last Step</Typography>
        <Typography variant="body1">
          by clicking send data you are agreeing to our services
        </Typography>
      </Box>
      <Button variant="contained" onClick={onPrevClick} color="prmary">
        Back
      </Button>
      <Button variant="contained" onClick={onFinishClick} color="primary">
        Submit
      </Button>
    </>
  );
};

export default Consent;
