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
            isDark === "dark" ?<img src="/sugoiDarkk.png" className="md:h-[100px] md:w-[100px] h-[80px] w-[80px]"/> :<img src="/sugoiLightt.png" className="h-[80px] w-[80px] md:h-[100px] md:w-[100px]"/>
        }
      </div>  

      <div className="flex gap-x-2">
        <button onClick={()=>navigate("/")} className="text-white px-2 py-1 rounded-sm bg-orange-600 font-semibold dark:border-2 ">Home</button>
        <button onClick={()=>navigate("/manga")}  className="text-white px-2 py-1 rounded-sm bg-orange-600 font-semibold dark:border-2">Manga</button>  
      </div>      

      <div>
        <button>
            {
                isDark === 'dark'?<FaMoon onClick={()=>{setIsDark("")}} size={25} />:<MdWbSunny onClick={()=>{setIsDark("dark")}} size={25}/>
            }
        </button>
      </div>   
    </div>
    </div>
   
  )
}

export default Navbar