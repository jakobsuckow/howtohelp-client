import { Button } from '@material-ui/core';
import React from 'react';
import FormInput from '../../../components/form/formInput';

const Address = (props) => {
  const { onPrevClick, onNextClick } = props;
  return (
    <>
      <FormInput name="address" lg placeholder="Type in your address" />
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
