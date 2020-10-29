import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import Layout from '../../components/layout/layout';
import { Box } from '@material-ui/core';

import { AlertContext } from '../../components/alert/alertProvider';
import { GlobalDataContext } from '../shared/app/globalDataProvider';
import Features from './steps/features';
import PersonalInfo from './steps/personalInfo';

const AddHelp = () => {
  const methods = useForm({
    shouldUnregister: false,
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    submitFocusError: false
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  const [activeStep, setActiveStep] = React.useState('features');

  const { showAlert } = React.useContext(AlertContext);
  const { setModal } = React.useContext(GlobalDataContext);

  const { handleSubmit } = methods;

  return (
    <Layout>
      <FormProvider {...methods}>
        <Box component="form">
          {activeStep === 'features' && (
            <Features onNextClick={() => setActiveStep('personal-info')} />
          )}
          {activeStep === 'personal-info' && <PersonalInfo onSubmit={handleSubmit(onSubmit)} />}
        </Box>
      </FormProvider>
    </Layout>
  );
};

export default AddHelp;
