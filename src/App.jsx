import './App.css'
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './pages/Home'
import Manga from './pages/Manga'
import { useState } from 'react'
import Navbar from './components/Navbar'
import { DarkTheme } from './context/DarkTheme'
import Footer from './components/Footer'
import MangaPage from './pages/MangaPage'

function App() {
  const [isDark,setIsDark] = useState("dark")
  return (
 <>
 <DarkTheme.Provider value={{isDark,setIsDark}}>
   <div className={`${isDark} dark:bg-black/90 dark:text-white h-screen`}>
      <BrowserRouter>
       <Navbar/>
       <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/manga' element={<Manga/>} />
           <Route path='/mangapage/:id' element={<MangaPage/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>   
 </DarkTheme.Provider>
     
 </>
  )
}

export default App
