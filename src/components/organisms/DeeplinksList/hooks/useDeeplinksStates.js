import { useQuery } from 'react-query';
import axios from 'axios';
import {
  DEEPLINKS_STATES_QUERY_KEY,
  DEEPLINKS_STATES_QUERY_URL,
} from '../const';

export const useDeeplinksStates = () => {
  const { data } = useQuery(DEEPLINKS_STATES_QUERY_KEY, () =>
    axios.get(DEEPLINKS_STATES_QUERY_URL).then(response => response.data)
  );

  return data?.map(state => ({
    key: state.id,
    text: state.name,
  }));
};
