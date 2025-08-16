import axios from "axios";
import { useState } from "react"

function SuggestModal({modal,setModal}) {
  const [submitStatus,setSubmitStatus] = useState(false);
  const [mangaName,setMangaName] = useState(null);
  const [chapterOneUrl,setURL] = useState(null)
  const [successNotification,setSuccess] = useState(false);
  const [errorNotification,setError] = useState(false)

  const handleSubmit = async()=>{
    setSubmitStatus(true)
    if(!mangaName && !chapterOneUrl){
      return alert("All input required")
    }
    try {
      const response = await axios.post("http://localhost:3000/api/v1/suggestion/submitsuggestion",{
      mangaName,
      chapterOneUrl
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
      console.log("error : ",error)
      setSubmitStatus(false)
    }}

    

  return (
    <div className={`${modal? "opacity-100 scale-100 pointer-events-auto":"opacity-0 pointer-events-none scale-95"} z-60 w-full fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/50 trasnsition duration-300 ease-in-out text-white` }>
      <div className="flex space-x-2 ">    
          <div className="flex flex-col space-y-5 border rounded-md p-4" >
             <div>
                <h1 className="text-white text-start">Manga name</h1>
                <input onChange={(e)=>setMangaName(e.target.value)} className="border rounded-md px-2 py-1" type='text'/>
             </div>
             <div>
                <h1 className="text-white text-start">Chapter 1 URL</h1>
                <input onChange={(e)=>setURL(e.target.value)} type='text' className="border rounded-md px-2 py-1 "/>
            </div>
            <div className="flex justify-center">
                <button disabled={submitStatus} onClick={handleSubmit} className={`${submitStatus ? "cursor-not-allowed opacity-50":""} border  py-1.5 px-3 text-black rounded-md bg-white hover:bg-transparent hover:text-white transition duration-200 ease-in-out cursor-pointer`}>{submitStatus?"Processing...":"Submit"}</button>
            </div>
        </div>

        <div  className="cursor-pointer" onClick={()=>{
          setModal(false)
          }}>X</div>

      </div>

       <div className={`absolute top-20 ${successNotification ? "opacity-100 scale-100":"opacity-0 scale-95"} transition-transform duration-300 ease-in-out `}>
          🎉Submission Successfull
       </div>
        <div className={`absolute top-20 ${errorNotification ? "opacity-100 scale-100":"opacity-0 scale-95"} transition-transform duration-300 ease-in-out `}>
          🥲Error!!
       </div>

    </div>
  )
}

export default SuggestModal