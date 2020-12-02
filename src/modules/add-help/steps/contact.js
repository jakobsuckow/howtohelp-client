import { Button } from '@material-ui/core';
import React from 'react';
import FormInput from '../../../components/form/formInput';

const Contact = (props) => {
  const { onPrevClick, onNextClick } = props;
  return (
    <>
      <FormInput name="contact" lg placeholder="Whats your email address" />
      <Button onClick={onPrevClick} variant="contained" color="primary">
        Previous
      </Button>
      <Button onClick={onNextClick} variant="contained" color="primary">
        Next
      </Button>
    </>
  );
};

export default Contact;
