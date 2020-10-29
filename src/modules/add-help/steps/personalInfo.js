import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import FormSelect from '../../../components/form/formSelect';

const PersonalInfo = (props) => {
  const { onSubmit } = props;
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ];

  return (
    <div>
      <Typography>Country</Typography>
      <Grid item xs={12} sm={6}>
        <FormSelect options={options} name="country" required placeholder="hi" />
        <Button onClick={onSubmit}>Submit</Button>
      </Grid>
    </div>
  );
};

export default PersonalInfo;
