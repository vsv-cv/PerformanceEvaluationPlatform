import PropTypes from 'prop-types'
import { useState, useRef, useCallback, useEffect } from 'react'

export const useFetch = url => {
  const [state, setState] = useState({})
  const _isMounted = useRef(true);

  const fetchData = useCallback(
    async () => {
      setState({ isLoading: true });

      try {
        const data = await fetch(url).then(res => res.json());
        if (!_isMounted) return;
        setState({ isSuccess: true, data });
      } catch(error) {
        if (!_isMounted) return;
        setState({ isError: true, error });
      }
    }, [url]
  )

  useEffect(() => {
    fetchData();
    return () => {
      _isMounted.current = false;
    }
  }, [fetchData])

  return url ? state : null;
}

useFetch.propTypes = {
  url: PropTypes.string.isRequired
}