import { useQuery } from 'react-query';
import axios from 'axios';
import { FORMS_LIST_QUERY_KEY, FORMS_STATES_QUERY_URL } from '../const';

export const useFormsStates = () => {
  const { data: surveysStatesData } = useQuery(FORMS_LIST_QUERY_KEY, () =>
    axios.get(FORMS_STATES_QUERY_URL).then(response => response.data)
  );

  return surveysStatesData?.map(state => ({
    key: state.id,
    text: state.name,
  }));
};
