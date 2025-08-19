import { Link, useParams } from "react-router-dom"
import Comment from "../components/Comment";
import { useEffect, useState } from "react";
import axios from "axios";
import { newReviews } from "../../data/newReviews";

function MangaPage() {
  const {id} = useParams();
  const [visible , setVisible] = useState(3)
  const [submitStatus,setSubmitStatus] = useState(false);
  const [successNotification,setSuccess] = useState(false);
  const [errorNotification,setError] = useState(false)
  const [review,setReview] = useState(null)
  const [comments,setComments] = useState([])
  const manga = newReviews.find(manga =>manga.id.toString()===id) //we do toString because id from param is a string 

  const showComments = ()=>{
    setVisible((prev)=>prev+3)
  }

   const hideComments = ()=>{
    setVisible((prev)=>prev-3)
  }

  const handleSubmit = async()=>{
    if(!review){
      return alert("Input required")
    }
    setSubmitStatus(true)
    try {
    const response = await axios.post("http://localhost:3000/api/v1/comment/submitreview",{
         mangaID : Number(id),
         comment : review
    })
   setSubmitStatus(false)
   
    if(response.data.success){
     setSuccess(true)
    }else{
     setError(true)
    }
    setTimeout(() => {
      setSuccess(false)
      setError(false)
    }, 3000);

    } catch (error) {
     setSubmitStatus(false)
      console.log("error : ",error)
    }
   
  }

 

useEffect(() => {
  const fetchReviews = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1/comment/getreview/${Number(id)}`
      );
      setComments(response.data.comments)
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  fetchReviews();
}, [id,handleSubmit]);


  return (
    <div className="flex flex-col justify-center items-center p-4 space-y-10">

        <div className="flex flex-col space-y-4 md:flex-row ">
           <div className="border rounded-sm p-2 md:mr-5   mx-auto overflow-hidden shadow-2xl shadow-gray-500"><img src={manga.imageUrl} className="h-[300px] w-[200px] hover:scale-110 trasition duration-300 ease-in-out"/> 
           </div>

           <div className="space-y-4 ">

             <div className="text-4xl font-bold">{manga.title}</div>

             <div className="max-w-3xl">{manga.description}</div>

             <button className="border py-2 px-4 rounded-md cursor-pointer hover:scale-106 trasition duration-200 ease-in-out"><Link to={manga.chapterOneUrl} target="_blank">Start Reading</Link></button>

             <div>⭐⭐⭐⭐⭐</div>

             <div className="flex flex-col  max-w-lg w-full sm:max-w-xl md:max-w-2xl md:mt-9">
               <label  className="mb-2 font-bold dark:text-gray-200 text-sm sm:text-base" > Leave a anonymous review:  </label>
             <div className="flex border rounded-md overflow-hidden">
               <textarea onChange={(e)=>setReview(e.target.value)} rows="1" maxLength="100" className="px-3 py-3 border-r w-full y-resize"
               ></textarea>
              <button onClick={handleSubmit} disabled={submitStatus}  className={`${submitStatus?"opacity-50 cursor-not-allowed":"cursor-pointer"} py-1 px-6 bg-blue-600 text-white `}>{submitStatus?"...":"Submit"}</button>
            </div>
            </div>

           </div>
        </div>
         
         <div className= "flex flex-col max-w-5xl w-full ">
           <div className="dark:text-white/85 mb-5">Reviews : </div>
           {
            comments.length === 0 ? <div className="mx-auto dark:text-white/40 text-black/40">No reviews yet</div>:<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 space-x-10 space-y-6  mx-auto">
              {
                comments.slice(0,visible).map((c,index)=>{
                  return(
                    <div key={index}>
                       <Comment  comment={c.comment}  />
                    </div>
                     
                  )
                })
              }
           </div>
           }
           

           <div className=" flex w-[230px] mx-auto">
             {
            visible < comments.length && (
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
     
        <div className={`absolute top-20  ${successNotification ? "opacity-100 scale-100 ":"opacity-0 scale-95 "} z-80 transition-transform duration-300 ease-in-out bg-white/40 backdrop-blur-sm  p-2 border dark:border-white rounded-md`}>
          🎉Submission Successfull
       </div>
        <div className={`absolute top-20 ${errorNotification ? "opacity-100 scale-100":"opacity-0 scale-95"} transition-transform duration-300 ease-in-out `}>
          🥲Error!!
       </div>

    </div>
  )
}

export default MangaPage