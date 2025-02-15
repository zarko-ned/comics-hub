
import useData from "./useData";

export interface Seria {
  id: number;
  title: string;
}



const useSeries = () => useData<Seria>('/series');

export default useSeries;
