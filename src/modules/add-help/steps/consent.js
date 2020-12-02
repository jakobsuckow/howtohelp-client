import { Button } from '@material-ui/core';
import React from 'react';
import FormInput from '../../../components/form/formInput';

const Consent = (props) => {
  const { onPrevClick, onFinishClick } = props;

  return (
    <>
      <FormInput name="contact" lg placeholder="Whats your email address" />
      <Button onClick={onPrevClick} variant="contained" color="primary">
        Previous
      </Button>
      <Button onClick={onFinishClick} variant="contained" color="primary">
        Finish
      </Button>
    </>
  );
};

export default Consent;
