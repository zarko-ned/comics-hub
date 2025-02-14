import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface Seria {
  id: number;
  title: string;
}

interface FetchSeriasRespone {
  data: {
    results: Seria[];
  };
}

const useSeries = () => {
  const [series, setSeries] = useState<Seria[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    apiClient
      .get<FetchSeriasRespone>("/series", { signal: controller.signal })
      .then((res) => {
        setSeries(res.data.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { series, error, isLoading };
};

export default useSeries;
