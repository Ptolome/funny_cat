import { useState, useCallback } from "react";
interface Idata {
  id: string;
  url: string;
  width: number;
  height: number;
}

const useFetch = (url: string, options: RequestInit, limit: number = 1) => {
  const [data, setData] = useState<Idata[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true); 
    try {
      const response = await fetch(`${url}?limit=${limit}&order=RANDOM`, options);

      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
      }

      const jsonData = await response.json();
      setData(jsonData);
    } catch (err) {
      if (err instanceof Error) {
        setError(err);
      } else {
        setError(new Error("Неизвестная ошибка"));
      }
    } finally {
      setLoading(false); 
    }
  }, [url, options, limit]);

  return { data, loading, error, fetchData }; 
};

export default useFetch;