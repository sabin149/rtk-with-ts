import { useState, useEffect } from "react";

export const useFetch = <T,>(url: string, initialSTate: T) => {
  const [data, setData] = useState<T>(initialSTate);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [url]);

  return [data, loading, error] as [typeof data, typeof loading, typeof error];
};
