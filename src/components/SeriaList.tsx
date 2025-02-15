
import useSeries from '@/hooks/useSeries';


const SeriaList = () => {
    const {data} = useSeries();
  return (
    <ul>
        {data.map(seria=><li key={seria.id}>{seria.title}</li>)}
    </ul>
  )
}

export default SeriaList