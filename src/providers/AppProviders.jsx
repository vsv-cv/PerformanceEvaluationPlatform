import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { UsersProvider } from './UsersProvider';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const AppProviders = ({ children }) => {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <UsersProvider>{children}</UsersProvider>
        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
    </Router>
  );
};
