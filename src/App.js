import React from "react";
import { QueryClient, QueryClientProvider } from 'react-query'
import { RolesList } from "./components/molecules/RolesList";

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
    </QueryClientProvider>
  )
}

export default App;