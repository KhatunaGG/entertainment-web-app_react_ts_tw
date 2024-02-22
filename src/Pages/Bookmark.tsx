import { useContext } from 'react'
import { GlobalState } from '../App'



const Bookmark = () => {

  const context = useContext(GlobalState);
  if (!context) return null;
  const { screenWidth } = context;



  
  return (
    <div>Bookmark</div>
  )
}

export default Bookmark