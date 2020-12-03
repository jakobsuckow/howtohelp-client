import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Address from './steps/address';
import Attributes from './steps/attributes';
import Name from './steps/name';
import Email from './steps/email';
import Consent from './steps/consent';
import { AlertContext } from '../../components/alert/alertProvider';

const useStyles = makeStyles(() => ({
  root: {}
}));

const FormStepper = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState('attributes');
  const { showAlert } = React.useContext(AlertContext);
  const [userInput, setUserInput] = React.useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      atributes: {},
      name: '',
      email: '',
      address: ''
    }
  );

  const methods = useForm({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    submitFocusError: true
  });

  const { handleSubmit, getValues, trigger } = methods;

  const onSubmit = () => {
    console.log(userInput);
  };

  const nextStep = React.useCallback(
    (name, next) => {
      trigger(name).then((res) => {
        if (res === false) {
          showAlert({
            message: 'This field is mandatory',
            severity: 'info'
          });
        } else {
          const value = getValues(name);
          setUserInput({ [name]: value });
          setActiveStep(next);
        }
      });
    },
    [getValues, setActiveStep, trigger, showAlert]
  );

  return (
    <div className={classes.root}>
      <FormProvider {...methods}>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          {activeStep === 'attributes' && (
            <Attributes
              onNextClick={() => setActiveStep('name')}
              nextStep={nextStep}
              handleSubmit={handleSubmit}
            />
          )}

          {activeStep === 'name' && (
            <Name
              onPrevClick={() => setActiveStep('attributes')}
              onNextClick={() => nextStep('name', 'email')}
            />
          )}

          {activeStep === 'email' && (
            <Email
              onPrevClick={() => setActiveStep('name')}
              onNextClick={() => nextStep('email', 'address')}
            />
          )}

          {activeStep === 'address' && (
            <Address
              onPrevClick={() => setActiveStep('email')}
              onNextClick={() => nextStep('address', 'consent')}
            />
          )}
          {activeStep === 'consent' && (
            <Consent
              onPrevClick={() => setActiveStep('address')}
              onFinishClick={handleSubmit(onSubmit)}
            />
          )}
        </Box>
      </FormProvider>
    </div>
  );
};

export default FormStepper;
