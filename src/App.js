import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { SurveysList } from './components/molecules/SurveyList';
import { Header } from './components/molecules/Header';
import { RolesList } from './components/molecules/RolesList';
import { FieldGroupsList } from './components/molecules/FieldsGroupsList';
import { FormsList } from './components/molecules/FormsList';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Switch>
          <Route exact path="/">
            Home Page
          </Route>
          <Route exact path="/projects">
            Projects List
          </Route>
          <Route exact path="/teams">
            Teams List
          </Route>
          <Route exact path="/users">
            Users List
          </Route>
          <Route exact path="/fields">
            Fields List
          </Route>
          <Route exact path="/deeplinks">
            Deeplinks List
          </Route>
          <Route exact path="/documents">
            Documents List
          </Route>
          <Route exact path="/roles">
            <RolesList />
          </Route>
          <Route exact path="/fieldgroups">
            <FieldGroupsList />
          </Route>
          <Route exact path="/surveys">
            <SurveysList />
          </Route>
          <Route exact path="/forms">
            <FormsList />
          </Route>
          <Route exact path="/formtemplates">
            Form Templates List
          </Route>
          <Route path="/*">404: Page not found.</Route>
        </Switch>
        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
    </Router>
  );
};

export default App;
