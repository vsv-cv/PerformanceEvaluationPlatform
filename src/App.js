import React from "react";
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { RolesList } from "./components/molecules/RolesList";
import { UsersList } from './components/molecules/UsersList/UsersList';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UsersList />
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}

export default App;