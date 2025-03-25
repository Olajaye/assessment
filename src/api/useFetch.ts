'use client'

import { useState, useEffect, useCallback } from 'react';
import axios, { AxiosError } from 'axios';
import { Product, UseFetchObjectsResult } from '@/types/types';

export const useFetchObjects = (): UseFetchObjectsResult => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    const source = axios.CancelToken.source();
    
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get<Product[]>('https://api.restful-api.dev/objects', {
        cancelToken: source.token
      });
      
      setData(response.data);
    } catch (err) {
      if (!axios.isCancel(err)) {
        const error = err as AxiosError;
        setError(error.message || 'An unknown error occurred');
      }
    } finally {
      if (!source.token.reason) {
        setLoading(false);
      }
    }

    return () => source.cancel('Component unmounted, request canceled');
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
};