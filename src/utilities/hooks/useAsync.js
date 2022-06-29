import { useState, useCallback } from 'react';

export const useAsync = (initialState) => {
  const [data, setData] = useState(initialState ?? null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const run = useCallback(
    (promise) => {
      if (!promise || !promise.then) {
        throw new Error(`The argument passed to useAsync().run must return a promise.`);
      }
      setStatus('pending');
      return promise.then(
        (data) => {
          setData(data);
          setStatus('resolved');
          return data;
        },
        (error) => {
          setError(error);
          setStatus('rejected');
          return Promise.reject(error);
        }
      );
    },
    [setData, setError, setStatus]
  );
  return {
    isIdle: status === 'idle',
    isLoading: status === 'pending',
    isError: status === 'rejected',
    isSuccess: status === 'resolved',
    setData,
    setError,
    error,
    status,
    data,
    run,
  };
};
