import { useState, useEffect } from 'react';
import { fetchCategoryData } from '../services/api/fetcher';

export const useApi = (categoryId) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!categoryId) {
        setError('Category ID is required');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const items = await fetchCategoryData(categoryId);
        setData(items);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categoryId]);

  return { data, loading, error };
};
