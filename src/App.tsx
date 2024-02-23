import './App.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Movies from './Pages/Movies'
import TVSeries from './Pages/TVSeries'
import Bookmark from './Pages/Bookmark'
import Root from './Pages/Root'
import { createContext, useState, useEffect } from 'react'
import jsonData from './data.json'
import { IData } from './interface'
// import data from './data.json'



type GlobalStateType = {
  screenWidth: number;
  data: IData[];
  setBookmarked: React.Dispatch<React.SetStateAction<boolean>>;
  bookmarked: boolean
}

export const GlobalState = createContext<GlobalStateType | null>(null)

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [data, setData] = useState<IData[]>(jsonData)
  const [bookmarked, setBookmarked] = useState(false)



  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])


  const router = createBrowserRouter((
    createRoutesFromElements(
      <Route path='/' element={<Root />} >
        <Route index element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/tvseries' element={<TVSeries />} />
        <Route path='/bookmark' element={<Bookmark />} />
      </Route>
    )
  ))


  return (
    <div className='App w-full  h-screen flex flex-col items-center bg-[#10141E] '>
      <GlobalState.Provider value={{
        screenWidth,
        data,
        setBookmarked,
        bookmarked
      }}>
        <RouterProvider router={router}></RouterProvider>
      </GlobalState.Provider>
    </div>

  )
}

export default App
