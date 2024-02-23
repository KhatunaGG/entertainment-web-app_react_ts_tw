import { GlobalState } from "../App"
import { useContext } from 'react'



const TVSeries = () => {

  const context = useContext(GlobalState);
  if (!context) return null;
  const { screenWidth, data } = context;



  return (
    <div className='w-[91.46%] text-sm md:text-[32px] mb-4 md:mb-6 lg:mb-8'>
      <h2 className='text-sm md:text-[32px] mb-4 md:mb-6'>TV Series</h2>
      <div className="grid grid-cols-2 gap-8  md:grid-cols-3 lg:grid-cols-4">
        {data.filter((el) => el.category === 'TV Series').map((item) => (
          <div key={item.title} className="col-span-1 flex flex-col">
            <div className='w-full relative'>

              {screenWidth > 375 ? (
                <img className='rounded-lg' src={item.thumbnail.regular.medium} alt="" />
              )
                : screenWidth > 768 ? (
                  <img className='rounded-lg' src={item.thumbnail.regular.large} alt="" />
                ) :
                  <img className='rounded-lg' src={item.thumbnail.regular.small} alt="" />
              }

              <div className='absolute top-[4.84%] right-[4.84%]  w-8 h-8 bg-[#5A698F] rounded-full flex items-center justify-center'>
                <img className='' src="/assets/icon-bookmark-empty.svg" alt="" />
              </div>


            </div>
            <div className="info  flex flex-col flex-start">
              <div className="etails flex flex-row items-center gap-2 justify-start mb-1">
                <div className="year text-xs">{item.year}</div>
                <div className="category flex flex-row items-center gap-2">
                  <span className='w-1 h-1 rounded-full bg-[#979797]'></span>
                  <img src="/assets/icon-nav-movies.svg" alt="" className="categori-icon w-[10px] h-[10px] md:w-[12px] md:h-[12px]" />
                  <span className='text-xs'>{item.category}</span>
                </div>
                <div className='flex flex-row items-center gap-[11px]'>
                  <span className='w-1 h-1 rounded-full bg-[#979797]'></span>
                  <div className="rating text-xs">{item.rating}</div>
                </div>
              </div>
              <h3 className='title text-[15px] w-full text-left '>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TVSeries