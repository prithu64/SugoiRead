function Comment({comment}) {
  return (
    <div className="max-w-[300px] h-[100px]  ">
     <h1 className="mb-1 dark:text-white/50 text-sm">@anonymous</h1>
     <p className="border rounded-md dark:text-white/80 italic dark:border-white/40 p-2 text-sm">{comment}</p>
   </div>
  )
}

export default Comment