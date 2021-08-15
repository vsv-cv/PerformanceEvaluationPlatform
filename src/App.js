import React from "react";
import { RolesList } from "./components/molecules/RolesList";
import { ListWithFilters } from './components/organisms/ListWithFilters';

function App() {

  return <ListWithFilters
    title="Roles"
    button={
      <button
        onClick={()=> console.log('Clicked!')}
      >
        Any button
      </button>
    }
    list={<RolesList />}
    sidebar={<div>Sidebar</div>}
  />
}

export default App;