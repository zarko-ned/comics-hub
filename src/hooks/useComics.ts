import { Character } from "./useCharacters";
import useData from "./useData";
import { Seria } from "./useSeries";

export interface Comic {
  id: number;
  title: string;
  thumbnail: { path: string; extension: string };
  pageCount: number;
}

const useComics = (
  selectedSeria: Seria | null,
  selectedCharacter: Character | null
) =>
  useData<Comic>(
    "/comics",
    {
      params: { series: selectedSeria?.id, characters: selectedCharacter?.id },
    },
    [selectedSeria?.id, selectedCharacter?.id]
  );
 
export default useComics;
