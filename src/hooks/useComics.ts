import useData from "./useData";
import { Seria } from "./useSeries";

export interface Comic {
  id: number;
  title: string;
  thumbnail: { path: string; extension: string };
  pageCount: number;
}

const useComics = (selectedSeria: Seria | null) =>
  useData<Comic>("/comics", { params: { series: selectedSeria?.id } }, [selectedSeria?.id]);

export default useComics;
