import { useState } from 'react';
import axios from 'axios';

const usePutRecords = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const putRecord = (user, id) => {
    setLoading(true);
    axios.put(`records/${id}`, user).then((resp) => {
      setData(resp);
      setLoading(false);
    });
  };

  return { putRecord, data, loading, error };
};

export default usePutRecords;
