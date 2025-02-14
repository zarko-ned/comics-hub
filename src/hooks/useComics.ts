import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface Comic {
  id: number;
  title: string;
  thumbnail: { path: string; extension: string };
}

interface FetchComicsResponse {
  data: {
    results: Comic[];
  };
}

const useComics = () => {
  const [comics, setComics] = useState<Comic[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchComicsResponse>("/comics", { signal: controller.signal })
      .then((res) => setComics(res.data.data.results))
      .catch((err) => {
        if(err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { comics, error };
};

export default useComics;
