import { useEffect, useState } from 'react';
import http from '../../../../http';

export const useGet = url => {
  const [state, setState] = useState({
    data: { content: [], total: 0 },
    loading: true,
    error: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      setState(state => ({ data: state.data, loading: true }));
      try {
        const response = await http.get(url);
        setState(state => ({ data: response.data, loading: false }));
      } catch (ex) {
        setState(state => ({
          data: { content: [], total: 0 },
          loading: false,
          error: true,
        }));
      }
    };
    fetchData();
  }, [url]);

  return state;
};
