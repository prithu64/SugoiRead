

function Footer() {
  return (
     <footer className="w-full flex text-sm justify-center dark:text-gray-300 text-center py-6 px-4">
      
       <div className="flex items-center">
         <img src= "/footergif.gif" className="h-[40px] w-[40px]" />
        <div >
           <a
             href="https://github.com/prithu64/SugoiRead"
             target="_blank"
             className="underline ml-2 italic"
           >
            ⭐ smash this Repo
           </a>
         </div>
         <img src= "/footergif.gif" className="h-[40px] w-[40px]"/>
      </div>

    </footer>
  )
}

export default Footer