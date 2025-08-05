import { MdWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

function Navbar() {
  return (
    <div className="flex items-center justify-between max-w-3xl mx-auto">  
      <div>
        <img src="/sugoiLightt.png" className="h-[100px] w-[100px]"/>
      </div>  

      <div className="space-x-6">
        <button className="border px-2 py-1 rounded-sm">Home</button>
        <button className="border px-2 py-1 rounded-sm">Manga</button>  
      </div>      

      <div>
        <button>
            <MdWbSunny  size={20}/>
        </button>
      </div>   
    </div>
  )
}

export default Navbar