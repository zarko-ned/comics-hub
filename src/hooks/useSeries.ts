
import useData from "./useData";

export interface Seria {
  id: number;
  title: string;
  thumbnail: { path: string; extension: string };
}



const useSeries = () => useData<Seria>('/series');

export default useSeries;
