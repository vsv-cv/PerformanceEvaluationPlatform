import { useQuery } from 'react-query';
import axios from 'axios';
import { DOCUMENTS_TYPES_QUERY_KEY, DOCUMENTS_TYPES_QUERY_URL } from '../const';

export const useDocumentTypes = () => {
  const { data } = useQuery(DOCUMENTS_TYPES_QUERY_KEY, () =>
    axios.get(DOCUMENTS_TYPES_QUERY_URL).then(response => response.data)
  );

  return data?.map(doc => ({
    key: String(doc.id),
    text: doc.typeName,
  }));
};
