import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { SurveysList } from './components/molecules/SurveyList';
import { Header } from './components/molecules/Header';
import { RolesList } from './components/molecules/RolesList';
import { FieldGroupsList } from './components/molecules/FieldsGroupsList';
import { FormsList } from './components/molecules/FormsList';
import { UsersList } from './components/molecules/UsersList';
import { TeamsList } from './components/molecules/TeamsList';
import { ProjectsList } from './components/molecules/ProjectsList';
import { UsersProvider } from './providers/UsersProvider';
import { ToastsProvider } from './providers/ToastsProvider';
import { DocumentsList } from './components/molecules/DocumentsList/DocumentsList';
import { DeeplinksList } from './components/molecules/DeeplinksList/DeeplinksList';
import { FieldsList } from './components/molecules/FieldsList/FieldsList';
import MainContentWrapper from './components/atoms/MainContentWrapper/MainContentWrapper';
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
          <Header />
          <MainContentWrapper>
            <Switch>
              <Route exact path="/">
                <Example/>
              </Route>
              <Route exact path="/projects">
                <ProjectsList/>
              </Route>
              <Route exact path="/teams">
                <TeamsList/>
              </Route>
              <Route exact path="/users">
                <UsersList/>
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
          </ToastsProvider>
        </UsersProvider>
        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
    </Router>
  );
};

export default App;
