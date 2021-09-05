import { useState, useEffect } from 'react';
import { filterEmptyValues } from '../utils';
import axios from 'axios';
import qs from 'qs';

export const useFetch = (url, fetchParams) => {
  const [data, setData] = useState();
  const [pageParams, setPageParams] = useState({ take: 1, skip: 3 })

  useEffect(() => {
    url && fetchingData(url, fetchParams);
  }, [url]);

  async function fetchingData(url, fetchParams) {
    try {
      let newData = await axios.get(url, {
          params: {
            ...fetchParams,
          },
          paramsSerializer: params =>
            qs.stringify(filterEmptyValues(params), { indices: false }),
        }).then(response => {
          return response.data;
        });
      setData(newData);
    } catch (e) {
      console.log(e);
    }
    return 'response'
  }

  async function getNextPage(url, fetchParams) {
    try {
      let newData = await axios.get(url, {
          params: {
            ...fetchParams,
            Take: pageParams.take,
            Skip: pageParams.skip,
          },
          paramsSerializer: params =>
            qs.stringify(filterEmptyValues(params), { indices: false }),
        })
        .then(response => {
          return response.data;
        });
      setData([...data, ...newData]);
      setPageParams(prev => ({
        ...prev,
        skip: pageParams.skip + pageParams.take,
      }));
    } catch (e) {
      console.log(e);
    }
    return 'respons'
  }

  return { data, fetchingData, getNextPage };
};
