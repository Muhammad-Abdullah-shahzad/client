import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook to perform GET requests with loading and error states.
 * 
 * @param {string} url - The URL to fetch data from.
 * @param {Object} options - Optional fetch options.
 * @returns {Object} - { data, loading, error, refetch }
 */

const useGET = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (abortController) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        ...options,
        signal: abortController.signal,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(err.message || 'Something went wrong');
      }
    } finally {
      if (!abortController.signal.aborted) {
        setLoading(false);
      }
    }
  }, [url, options]);

  useEffect(() => {
    const abortController = new AbortController();
    fetchData(abortController);

    return () => abortController.abort();
  }, [url]);

  const refetch = () => {
    const abortController = new AbortController();
    fetchData(abortController);
  };

  return { data, loading, error, refetch };
};

export default useGET;
