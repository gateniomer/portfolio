import { getContributions } from "../utils/github";
import { useEffect,useState } from "react";
export const ContributionsGride = () => {
  const [data,setData] = useState(null);
  useEffect(()=>{
    const fetchData = async () => {
    const data = await getContributions('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', 'gateniomer')
    console.log(data)
    }
  },[])
  return (
    <div>
      
    </div>
  )
}

export default ContributionsGride;