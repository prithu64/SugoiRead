import { MdWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DarkTheme } from "../context/DarkTheme.js";

function Navbar() {
 const navigate = useNavigate();
 const {isDark,setIsDark} = useContext(DarkTheme);

  return (
    <div className="px-4">
        <div className="flex items-center justify-between max-w-2xl text-sm mx-auto">  
      <div>
        {
            isDark === "dark" ?<img src="/sugoiDarkk.png" className="md:h-[100px] md:w-[100px] h-[70px] w-[70px]"/> :<img src="/sugoiLightt.png" className="h-[70px] w-[70px] md:h-[100px] md:w-[100px]"/>
        }
      </div>  

      <div className="flex gap-4">
        <button onClick={()=>navigate("/")} className="md:text-sm text-xs font-semibold cursor-pointer transition-all bg-orange-500 text-white px-6 py-2 rounded-lg  border-orange-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                Home
        </button>
        <button onClick={()=>navigate("/manga")}  className="md:text-sm text-xs font-semibold cursor-pointer transition-all bg-orange-500 text-white px-6 py-2 rounded-lg border-orange-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                Manga
        </button> 
      </div>      

      <div>
        <button className="rounded-full border p-2 dark:border-gray-50/30 border-gray-800/70">
            {
                isDark === 'dark'?<FaMoon onClick={()=>{setIsDark("")}} size={20} />:<MdWbSunny onClick={()=>{setIsDark("dark")}} size={20}/>
            }
        </button>
      </div>   
    </div>
    </div>
   
  )
}

export default Navbar