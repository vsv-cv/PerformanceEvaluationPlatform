import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { UsersProvider } from './UsersProvider';
import { LeftMenuNavigationProvider } from './LeftMenuNavigationProvider';

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
        <UsersProvider>
          <LeftMenuNavigationProvider>{children}</LeftMenuNavigationProvider>
        </UsersProvider>
        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
    </Router>
  );
};
