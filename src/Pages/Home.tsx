import { useContext } from 'react'
import { GlobalState } from '../App'
import Swiper from '../components/Swiper';





function Home() {

  const context = useContext(GlobalState);
  if (!context) return null;
  const { screenWidth, data } = context;


  return (
    <div className='w-[91.46%] bg-[var(--dark-blue)] '>

      <div className='flex items-center gap-4  mb-4 md:gap-6  md:mb-8'>
        <img className='w-6 h-6 md:h-8 md:w-8 bg-[var(--dark-blue)]' src="/assets/search.svg" alt="" />

        <input className='bg-[var(--dark-blue)] border-none outline-none' type="text" placeholder='Search for movies or TV series' />

      </div>


      <Swiper />



    </div>






  );
}

export default Home