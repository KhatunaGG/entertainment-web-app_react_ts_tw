import { useContext } from 'react'
import { GlobalState } from '../App'



const Swiper = () => {

    const context = useContext(GlobalState);
    if (!context) return null;
    const { screenWidth, data } = context;




    return (
        <section>
            <h2 className='text-sm md:text-[32px] mb-4 md:mb-6'>Trending</h2>
            <div className="slide flex flex-row bg-red-500 ">


                {data.filter((el) => el.thumbnail.trending).map((item) => (
                    <>
                        <div style={{ width: screenWidth < 375 ? '240px' : '470px', height: screenWidth < 375 ? '140px' : '230px', borderRadius: '8px', position: 'relative' }}>


                            <div className='w-full group relative'>
                                {screenWidth > 375 ? (
                                    <img
                                        className='relative hover:brightness-50 rounded-lg' src={item.thumbnail.trending.large} alt="" />
                                ) : (
                                    <img
                                        className='relative hover:brightness-50 rounded-sm' src={item.thumbnail.trending.small} alt="" />
                                )}

                                <div className='overlay absolute top-0 right-0 left-0 hover:bg-white hover:bg-opacity-30 duration-300 z-10'
                                    style={{ width: screenWidth < 375 ? '240px' : '470px', height: screenWidth < 375 ? '140px' : '230px', borderRadius: '8px' }}>
                                    <div className='absolute top-[40%] left-[35%] w-[117px] h-[48px] rounded-[29px] hover:bg-white hover:bg-opacity-30 duration-300 flex items-center justify-left pl-2'>
                                        <div className='flex items-center gap-[19px]'>
                                            <img className='' src="/assets/icon-play.svg" alt="" />
                                            <span>Play</span>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className='absolute top-2 right-2 md:top-4 md:right-6  w-8 h-8 bg-[#5A698F] rounded-full flex items-center justify-center'>
                                <img className='' src="/assets/icon-bookmark-empty.svg" alt="" />
                            </div>
                        </div>
                        <div className="info absolute top-[65.83%] left-[4.65%] flex flex-col items-center">
                            <div className="etails flex flex-row items-center  gap-2">
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
                    </>
                ))}



                
            </div>




        </section>
    )
}

export default Swiper


// hover:bg-[#979797] hover:opacity-30