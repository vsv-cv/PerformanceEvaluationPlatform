import { useQuery } from 'react-query';
import axios from 'axios';
import { FIELDS_TYPES_QUERY_KEY, FIELDS_TYPES_QUERY_URL } from '../const';

export const useFieldsTypes = () => {
  const { data } = useQuery(FIELDS_TYPES_QUERY_KEY, () =>
    axios.get(FIELDS_TYPES_QUERY_URL).then(response => response.data)
  );

  return data?.map(state => ({
    key: state.id,
    text: state.name,
  }));
};
