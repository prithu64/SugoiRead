function MangaCard({src,title,key,onClick}) {
  return (
    <div key={key} className="border dark:border-white/50 px-2 py-4 rounded-md shadow-2xl shadow-gray-600">
        <div className="">
           <div className="overflow-hidden">
              <img className="h-[300px] w-[240px] rounded-md  hover:scale-108 transition-transform duration-300 ease-in-out" src={src}/>
           </div>
        </div>
        <div className="flex justify-between mt-3">
            <h1 className="font-semibold ">{title}</h1>
            <button onClick={onClick}  className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-amber-600/80 dark:bg-gray-800/30 backdrop-blur-lg px-4 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20"
             >
               <span className="text-xs">More</span>
               <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000     group-hover/button:[transform:skew(-13deg)_translateX(100%)]"
                >
                <div class="relative h-full w-10 bg-white/20"></div>
                </div>
           </button>
        </div>
    </div>
  )
}

export default MangaCard