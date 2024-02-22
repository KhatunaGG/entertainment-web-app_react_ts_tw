import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { GlobalState } from '../App';

const Root = () => {

  const context = useContext(GlobalState);
  if (!context) return null;
  const { screenWidth } = context;


  return (
    <section className='root w-full flex items-center flex-col bg-[var(--dark-blue)] '>

      <header className="nuvBar w-full flex item-center bg-[var(--semi-dark-blue)] px-[3.19%] md:w-[91.46%] 
      items-center justify-between mb-6 md:mb-[33px] md:rounded-[10px] md:mt-[23px] ">

        <img className='logo' src="/assets/logo.svg" alt="" />
        <ul className='link-ul flex flex-row items-center gap-6 py-[18px] '>
          <li>
            <Link to={'/'}>
              <img src="/assets/icon-nav-home.svg" alt="" />
            </Link>
          </li>
          <li>
            <Link to={'/movies'}>
              <img src="/assets/icon-nav-movies.svg" alt="" />
            </Link>
          </li>
          <li>
            <Link to={'/tvseries'}>
              <img src="/assets/icon-nav-tv-series.svg" alt="" />
            </Link>
          </li>
          <li>
            <Link to={'/bookmark'}>
              <img src="/assets/icon-nav-bookmark.svg" alt="" />
            </Link>
          </li>
        </ul>
        <img className='avatar w-6 h-6' src="/assets/image-avatar.png" alt="" />
      </header>

      <Outlet />




    </section>
  );
};

export default Root;
