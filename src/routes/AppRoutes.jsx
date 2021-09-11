import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ProjectsList } from '../components/organisms/ProjectsList';
import { TeamsList } from '../components/organisms/TeamsList';
import { UsersList } from '../components/organisms/UsersList';
import { FieldsList } from '../components/organisms/FieldsList/FieldsList';
import { DeeplinksList } from '../components/organisms/DeeplinksList/DeeplinksList';
import { DocumentsList } from '../components/organisms/DocumentsList/DocumentsList';
import { RolesList } from '../components/organisms/RolesList';
import { FieldGroupsList } from '../components/organisms/FieldsGroupsList';
import { SurveysList } from '../components/organisms/SurveyList';
import { FormsList } from '../components/organisms/FormsList';
import { FormTemplatesList } from '../components/organisms/FormTemplatesList';

export const AppRoutes = () => {
  return (
    <Switch>
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
  );
};
