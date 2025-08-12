function SuggestModal({modal,setModal}) {
  return (
    <div className={`${modal? "opacity-100 scale-100 pointer-events-auto":"opacity-0 pointer-events-none scale-95"} z-60 w-full fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/50 trasnsition duration-300 ease-in-out text-white` }>
      <div className="flex space-x-2 ">    
          <div className="flex flex-col space-y-5 border rounded-md p-4" >
             <div>
                <h1 className="text-white text-start">Manga name</h1>
                <input className="border rounded-md px-2 py-1" type='text'/>
             </div>
             <div>
                <h1 className="text-white text-start">Chapter 1 URL</h1>
                <input type='text' className="border rounded-md px-2 py-1 "/>
            </div>
            <div className="flex justify-center">
                <button className="border rounded-md py-1.5 px-3 text-black bg-white hover:bg-transparent hover:text-white transition duration-200 ease-in-out cursor-pointer">Submit</button>
            </div>
        </div>

        <div className="cursor-pointer" onClick={()=>setModal(false)}>X</div>

      </div>
           
    </div>
  )
}

export default SuggestModal