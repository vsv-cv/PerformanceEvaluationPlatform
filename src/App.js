import React from "react";
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { FieldGroupsList } from "./components/molecules/FieldsGroupsList";

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
      <FieldGroupsList />
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  )
}

export default App;