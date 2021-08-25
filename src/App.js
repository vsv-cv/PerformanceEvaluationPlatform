import React from "react";
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import {FieldGroupsList} from './components/molecules/FieldsGroupsList';
import { FormTemplatesList } from "./components/molecules/FormTemplatesList/FormTemplatesList";
import {SurveysList} from './components/molecules/SurveyList';
import { TeamsList } from "./components/molecules/TeamsList/TeamsList";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <FieldGroupsList />
      <FormTemplatesList/>
      <SurveysList/>
      <TeamsList/>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}

export default App;
