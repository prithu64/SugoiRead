import { Link, useParams } from "react-router-dom"
import { mangaData } from "../../data/mangaData";
import { mangaReviews } from "../../data/mangaReviews";
import Comment from "../components/Comment";
import { useState } from "react";

function MangaPage() {
  const {id} = useParams();
  const [visible , setVisible] = useState(3)
  const manga = mangaData.find(manga =>manga.id.toString()===id) //we do toString because id from param is a string 

  const showComments = ()=>{
    setVisible((prev)=>prev+3)
  }

   const hideComments = ()=>{
    setVisible((prev)=>prev-3)
  }

  return (
    <div className="flex flex-col justify-center items-center p-4 space-y-10">

        <div className="flex flex-col space-y-4 md:flex-row ">
           <div className="border rounded-sm p-2 md:mr-5 mx-auto overflow-hidden shadow-2xl shadow-gray-500"><img src={manga.imageUrl} className="h-[300px] w-[200px] hover:scale-110 trasition duration-300 ease-in-out"/> 
           </div>

           <div className="space-y-4 ">

             <div className="text-4xl font-bold">{manga.title}</div>

             <div>{manga.description}</div>

             <button className="border py-2 px-4 rounded-md cursor-pointer hover:scale-106 trasition duration-200 ease-in-out"><Link to={manga.chapterOneUrl} target="_blank">Start Reading</Link></button>

             <div>⭐⭐⭐⭐⭐</div>

             <div className="flex flex-col  max-w-lg w-full sm:max-w-xl md:max-w-2xl md:mt-10">
               <label  className="mb-2 font-bold dark:text-gray-200 text-sm sm:text-base" > Leave a review:  </label>
             <div className="flex border rounded-md overflow-hidden">
               <textarea rows="1" className="px-3 py-3 border-r w-full y-resize"
               ></textarea>
              <button  className="py-1 px-6 bg-blue-600 text-white cursor-pointer">Submit</button>
            </div>
            </div>

           </div>
        </div>
         
         <div className= "flex flex-col max-w-4xl w-full">
           <div className="dark:text-white/85 mb-5">Reviews : </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 space-x-4">
              {
                mangaReviews.slice(0,visible).map((comment)=>{
                  return(
                    <Comment comment={comment}  />
                  )
                })
              }
           </div>

           <div className=" flex w-[230px] mx-auto">
             {
            visible < mangaReviews.length && (
              <div onClick={showComments} className=" underline mx-auto text-xs cursor-pointer">
                 More comments
              </div>
            )
            }
            {
              visible > 3 && (
                 <div onClick={hideComments} className=" underline mx-auto text-xs cursor-pointer">
                 Hide comments
                </div>
              )
            }
           </div>
           

         </div>
     

    </div>
  )
}

export default MangaPage