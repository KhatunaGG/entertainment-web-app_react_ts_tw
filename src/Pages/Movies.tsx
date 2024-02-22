import { GlobalState } from '../App'
import { useContext } from 'react'






const Movies = () => {

  const context = useContext(GlobalState);
  if (!context) return null;
  const { screenWidth } = context;





  return (
    <div>Movies</div>
  )
}

export default Movies