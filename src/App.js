import React from "react";
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { SurveysList } from "./components/molecules/SurveyList";

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
      <SurveysList />
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  )
}

export default App;