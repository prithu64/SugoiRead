import { MdWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DarkTheme } from "../context/DarkTheme.js";

function Navbar() {
 const navigate = useNavigate();
 const {isDark,setIsDark} = useContext(DarkTheme);

  return (
    <div className="flex items-center justify-between max-w-3xl mx-auto">  
      <div>
        {
            isDark === "dark" ?<img src="/sugoiDarkk.png" className="h-[100px] w-[100px]"/> :<img src="/sugoiLightt.png" className="h-[100px] w-[100px]"/>
        }
      </div>  

      <div className="space-x-6">
        <button onClick={()=>navigate("/")} className="border px-2 py-1 rounded-sm">Home</button>
        <button onClick={()=>navigate("/manga")}  className="border px-2 py-1 rounded-sm">Manga</button>  
      </div>      

      <div>
        <button>
            {
                isDark === 'dark'?<FaMoon onClick={()=>{setIsDark("")}} size={20} />:<MdWbSunny onClick={()=>{setIsDark("dark")}} size={20}/>
            }
        </button>
      </div>   
    </div>
  )
}

export default Navbar