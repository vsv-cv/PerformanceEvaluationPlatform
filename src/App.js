import React, { useContext } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { UsersList } from './components/molecules/UsersList';
import { TeamsList } from './components/molecules/TeamsList/TeamsList';
import { ProjectsList } from './components/molecules/ProjectsList/ProjectsList';
import { Toaster } from './components/atoms/Toaster/Toaster';
import { ToastsContextProv } from './index';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});



function App() {
  debugger
  const { toastsList, deleteToastOnClick, deleteToastOnSetTime } =
    useContext(ToastsContextProv);

  return (
    <QueryClientProvider client={queryClient}>
        <Toaster
          toasts={toastsList}
          deleteToastOnClick={deleteToastOnClick}
          deleteToastOnSetTime={deleteToastOnSetTime}
        />
        <UsersList />
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}

export default App;
