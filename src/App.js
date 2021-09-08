import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { SurveysList } from './components/organisms/SurveyList';
import { HeaderEntry } from './components/molecules/Header';
import { RolesList } from './components/organisms/RolesList';
import { FieldGroupsList } from './components/organisms/FieldsGroupsList';
import { FormsList } from './components/organisms/FormsList';
import { UsersList } from './components/organisms/UsersList';
import { TeamsList } from './components/organisms/TeamsList';
import { ProjectsList } from './components/organisms/ProjectsList';
import { UsersProvider } from './providers/UsersProvider';
import { ToastsProvider } from './providers/ToastsProvider';
import { DocumentsList } from './components/organisms/DocumentsList/DocumentsList';
import { DeeplinksList } from './components/organisms/DeeplinksList/DeeplinksList';
import { FieldsList } from './components/organisms/FieldsList/FieldsList';
import { FormTemplatesList } from './components/organisms/FormTemplatesList';
import Example from './components/atoms/Example';

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
          <ToastsProvider>
            <HeaderEntry />
            <Switch>
              <Route exact path="/">
                <Example />
              </Route>
              <Route exact path="/projects">
                <ProjectsList />
              </Route>
              <Route exact path="/teams">
                <TeamsList />
              </Route>
              <Route exact path="/users">
                <UsersList />
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
                <FormTemplatesList />
              </Route>
              <Route path="/*">404: Page not found.</Route>
            </Switch>
          </ToastsProvider>
        </UsersProvider>
        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
    </Router>
  );
};

export default App;
