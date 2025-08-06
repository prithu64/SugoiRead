import { mangaData } from "../../data/mangaData"
import MangaCard from "../components/MangaCard"

function Manga() {
  return (
    <div className='flex flex-col justify-center items-center py-[15px]'>
  
     <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {
         mangaData.map((manga)=>{
        return(
            <MangaCard key={manga.id} src={manga.imageUrl} title={manga.title} />
        )
      })
        }
     </div>
    
    </div>
  )
}

export default Manga