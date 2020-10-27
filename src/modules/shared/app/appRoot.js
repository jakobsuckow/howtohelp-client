import React from 'react';
import AppRouter from './appRouter';
import AlertProvider from '../../../components/alert/alertProvider';

const AppRoot = () => (
  <AlertProvider>
    <AppRouter />
  </AlertProvider>
);

export default AppRoot;
