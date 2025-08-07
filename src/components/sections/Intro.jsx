import { useNavigate } from "react-router-dom";

function Intro() {
  const navigate = useNavigate()
  return (

    <section className="flex text-white flex-col justify-center items-center text-center w-full bg-[url(/narutoBg.png)] bg-cover md:bg-contain bg-center bg-start  bg-blend-multiply bg-black/50 h-[500px] sm:h-[500px] xs:h-[300px] px-2">
    <h1 className="text-6xl md:text-8xl  font-semibold">Welcome to SugoiRead</h1>
    <p className="text-xl font-semibold sm:text-lg md:text-xl text-gray-200 mt-4 max-w-md sm:max-w-lg">
      This is a must read manga list . You won't regret this .
    </p>
    <p className="text-sm italic font-semibold sm:text-lg md:text-xl text-gray-200 mt-4 max-w-md sm:max-w-lg">
         Handpicked manga, real fan reviews, and hidden treasures – all in one place
    </p>
    <button onClick={()=>navigate("/manga")} className="md:text-sm text-xs font-semibold cursor-pointer transition-all bg-orange-500 text-white px-6 py-2 mt-10 rounded-full  border-orange-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">Browse manga's</button>
    </section>

  );
}

export default Intro;
