import { useQuery } from 'react-query';
import axios from 'axios';
import { SURVEYS_STATES_QUERY_KEY, SURVEYS_STATES_QUERY_URL } from '../const';

export const useSurveysStates = () => {
  const { data } = useQuery(SURVEYS_STATES_QUERY_KEY, () =>
    axios.get(SURVEYS_STATES_QUERY_URL).then(response => response.data)
  );

  return data?.map(state => ({
    key: state.id,
    text: state.name,
  }));
};
