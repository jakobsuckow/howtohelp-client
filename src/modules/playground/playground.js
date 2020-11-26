import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormSelect from '../../components/form/formSelect';
import Layout from '../../components/layout/layout';
import { Box, Grid } from '@material-ui/core';
import { FormProvider, useForm } from 'react-hook-form';
import { countries } from '../../services/countryList';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

const useStyles = makeStyles((theme) => ({}));

const Playground = () => {
  const methods = useForm({
    mode: 'onBlur'
  });
  const classes = useStyles();

  const { handleSubmit } = methods;
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Layout>
      <FormProvider {...methods}>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <Grid item xs={12} sm={6}>
            <FormSelect
              options={options}
              name="country"
              required={true}
              placeholder="Type in your Country"
            />
            <Button type="submit">Submit</Button>
          </Grid>
        </Box>
      </FormProvider>
    </Layout>
  );
};

export default Playground;
