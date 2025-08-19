function Comment({comment}) {
  return (
    <div  className="max-w-[300px] ">
     <h1 className=" dark:text-white/50 text-sm">@anonymous</h1>
     <p className=" rounded-md italic dark:text-white/80 text-gray-800/80 pb-2 text-sm ">{comment}</p>
   </div>
  )
}

export default Comment