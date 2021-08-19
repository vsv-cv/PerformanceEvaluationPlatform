import React from "react";
import { QueryClient, QueryClientProvider } from 'react-query'
import { RolesList } from "./components/molecules/RolesList";
import { ReactQueryDevtools } from 'react-query/devtools'

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
      <RolesList />
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  )
}

export default App;