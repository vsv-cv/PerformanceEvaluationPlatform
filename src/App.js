import React from "react";
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
<<<<<<< HEAD
import { RolesList } from "./components/molecules/RolesList";
import { UsersList } from './components/molecules/UsersList/UsersList';
=======
import { FieldGroupsList } from "./components/molecules/FieldsGroupsList";
>>>>>>> main

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
<<<<<<< HEAD
      <UsersList />
=======
      <FieldGroupsList />
>>>>>>> main
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}

export default App;