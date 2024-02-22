import { GlobalState } from "../App"
import { useContext } from 'react'



const TVSeries =  () => {

  const context = useContext(GlobalState);
  if (!context) return null;
  const { screenWidth } = context;


  
  return (
    <div>TVSeries</div>
  )
}

export default TVSeries