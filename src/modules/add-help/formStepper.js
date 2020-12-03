import { Box } from '@material-ui/core';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Address from './steps/address';
import Attributes from './steps/attributes';
import Name from './steps/name';
import Email from './steps/email';
import Consent from './steps/consent';
import { AlertContext } from '../../components/alert/alertProvider';
import useApi from '../shared/app/useApi';
import { GlobalDataContext } from '../shared/app/globalDataProvider';

const FormStepper = () => {
  const [activeStep, setActiveStep] = React.useState('attributes');

  const { showAlert } = React.useContext(AlertContext);
  const { setModal } = React.useContext(GlobalDataContext);

  const [postProv] = useApi('postProvideHelp');

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
    postProv(userInput).then((res) => {
      setTimeout(() => {
        showAlert({
          message: 'Thanks for your submission'
        });
        setModal({
          open: false
        });
      }, [400]);
    });
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
    <Box mt={8}>
      <FormProvider {...methods}>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
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
    </Box>
  );
};

export default FormStepper;
