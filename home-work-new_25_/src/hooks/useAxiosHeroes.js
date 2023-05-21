import { useEffect, useState } from 'react';
import axios from 'axios';

const useAxiosHeroes = (page) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    axios
      .get(`character/?page=${page}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
        // console.log('res', res);
      })
      .catch((err) => {
        setError(err);
      });
  }, [page]);

  return { data, loading, error };
};

export default useAxiosHeroes;
