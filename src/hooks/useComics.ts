import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

export interface Comic {
  id: number;
  title: string;
  thumbnail: { path: string; extension: string };
  pageCount: number;
}

interface FetchComicsResponse {
  data: {
    results: Comic[];
  };
}

const useComics = () => {
  const [comics, setComics] = useState<Comic[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    apiClient
      .get<FetchComicsResponse>("/comics", { signal: controller.signal })
      .then((res) => {
        setComics(res.data.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { comics, error, isLoading };
};

export default useComics;
