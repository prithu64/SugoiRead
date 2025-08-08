import { useState } from "react"
import { mangaData } from "../../data/mangaData"
import MangaCard from "../components/MangaCard"

function Manga() {
  const [visibleManga,setVisible] = useState(4);
  const loadManga = ()=>{
    setVisible((prev)=>prev+4);
  }

  const hideManga=()=>{
    setVisible((prev)=>prev-4)
  }

  return (
    <div className='flex flex-col justify-center items-center py-[15px]'>
  
     <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {
         mangaData.slice(0,visibleManga).map((manga)=>{
        return(
            <MangaCard key={manga.id} src={manga.imageUrl} title={manga.title} />
        )
      })
        }
        
     </div>

     <div className="flex gap-x-4">
         {
          visibleManga<mangaData.length &&(
            <div>
              <button className="flex justify-center mt-10 border p-1 w-[100px] rounded-md text-xs" onClick={loadManga}>
               Show More
             </button> 
            </div> 
          )
        }
         {
              visibleManga > 4 && (
                <button onClick={hideManga} className="flex justify-center mt-10 border p-1 w-[100px] rounded-md text-xs" >
                  Show less
                </button>
              )
         }
     </div>
     
    </div>
  )
}

export default Manga