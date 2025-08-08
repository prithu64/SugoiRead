import { useState } from "react"
import { mangaData } from "../../data/mangaData"
import MangaCard from "../components/MangaCard"

function Manga() {
  const [visibleManga,setVisible] = useState(6);
  const loadManga = ()=>{
    setVisible((prev)=>prev+4);
  }

  const hideManga=()=>{
    setVisible((prev)=>prev-4)
  }

  return (
    <div className='flex flex-col justify-center items-center py-[15px]'>
  
     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {
         mangaData.slice(0,visibleManga).map((manga)=>{
        return(
            <MangaCard key={manga.id} src={manga.imageUrl} title={manga.title} />
        )
      })
        }
        
     </div>

     <div className="flex gap-x-4 z-10">
         {
          visibleManga<mangaData.length &&(
            <div>
              <button className="mt-10 px-4 py-2 bg-orange-500 text-xs font-semibold text-white rounded-full shadow-md hover:bg-orange-600 hover:scale-105 transition-all border-b-[4px] border-orange-700" onClick={loadManga}>
               Show More
             </button> 
            </div> 
          )
        }
         {
              visibleManga > 6 && (
                <button onClick={hideManga}  className="mt-10 px-4 py-2 text-xs font-semibold bg-gray-700 text-white rounded-full shadow-md hover:bg-gray-800 hover:scale-105 border-b-[4px] border-gray-950 transition-all" >
                  Show less
                </button>
              )
         }
     </div>
     
    </div>
  )
}

export default Manga