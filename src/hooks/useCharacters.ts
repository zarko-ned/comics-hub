import useData from "./useData";

export interface Character {
  id: number;
  name: string;
  thumbnail: { path: string; extension: string };
}

const useCharacters = () => useData<Character>("/characters");

export default useCharacters;
