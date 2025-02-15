
import useData from "./useData";

export interface Comic {
  id: number;
  title: string;
  thumbnail: { path: string; extension: string };
  pageCount: number;
}



const useComics = () => useData<Comic>('/comics');

export default useComics;
