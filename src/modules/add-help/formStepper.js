import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Address from './steps/address';
import Attributes from './steps/attributes';
import Contact from './steps/contact';
import Consent from './steps/consent';

const useStyles = makeStyles(() => ({
  root: {}
}));

const FormStepper = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState('attributes');

  const methods = useForm({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    submitFocusError: false
  });

  const { handleSubmit } = methods;

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className={classes.root}>
      <FormProvider {...methods}>
        <Box component="form">
          {activeStep === 'attributes' && (
            <Attributes onNextClick={() => setActiveStep('address')} handleSubmit={handleSubmit} />
          )}
          {activeStep === 'address' && (
            <Address
              onNextClick={() => setActiveStep('contact')}
              onPrevClick={() => setActiveStep('attributes')}
            />
          )}
          {activeStep === 'contact' && (
            <Contact
              onPrevClick={() => setActiveStep('address')}
              onNextClick={() => setActiveStep('consent')}
            />
          )}
          {activeStep === 'consent' && (
            <Consent
              onPrevClick={() => setActiveStep('contact')}
              onFinishClick={handleSubmit(onSubmit)}
            />
          )}
        </Box>
      </FormProvider>
    </div>
  );
};

export default FormStepper;
