
import useSeries from '@/hooks/useSeries';


const SeriaList = () => {
    const {series} = useSeries();
  return (
    <ul>
        {series.map(seria=><li key={seria.id}>{seria.title}</li>)}
    </ul>
  )
}

export default SeriaList