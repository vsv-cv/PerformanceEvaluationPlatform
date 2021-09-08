import { useQuery } from 'react-query';
import axios from 'axios';
import {
  FORM_TEMPLATES_STATUS_QUERY_KEY,
  FORM_TEMPLATES_STATUS_QUERY_URL,
} from '../const';

export const useFormTemplatesStates = () => {
  const { data: surveysStatesData } = useQuery(
    FORM_TEMPLATES_STATUS_QUERY_KEY,
    () =>
      axios.get(FORM_TEMPLATES_STATUS_QUERY_URL).then(response => response.data)
  );

  return surveysStatesData?.map(state => ({
    key: state.id,
    text: state.name,
  }));
};
