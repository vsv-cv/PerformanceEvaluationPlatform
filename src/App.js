import React from 'react';
import { AppProviders } from './providers/AppProviders';
import { Header } from './components/molecules/Header';
import { AppRoutes } from './routes/AppRoutes';

export const App = () => {
  return (
    <AppProviders>
      <Header />
      <AppRoutes />
    </AppProviders>
  );
};
