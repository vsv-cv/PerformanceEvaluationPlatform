import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { SurveysList } from './components/molecules/SurveyList';
import { Header } from './components/molecules/Header';
import { RolesList } from './components/molecules/RolesList';
import { FieldGroupsList } from './components/molecules/FieldsGroupsList';
import { FormsList } from './components/molecules/FormsList';
import { UsersProvider } from './providers/UsersProvider';
import { DocumentsList } from './components/molecules/DocumentsList/DocumentsList';
import { DeeplinksList } from './components/molecules/DeeplinksList/DeeplinksList';
import { FieldsList } from './components/molecules/FieldsList/FieldsList';
import MainContentWrapper from './components/atoms/MainContentWrapper/MainContentWrapper';

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
        <UsersProvider>
          <Header />
          <MainContentWrapper>
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
                <FieldsList />
              </Route>
              <Route exact path="/deeplinks">
                <DeeplinksList />
              </Route>
              <Route exact path="/documents">
                <DocumentsList />
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
          </MainContentWrapper>
        </UsersProvider>
        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
    </Router>
  );
};

export default App;
