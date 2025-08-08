import { BsIncognito } from "react-icons/bs";
import { MdNewLabel } from "react-icons/md";
import { FaTrophy } from "react-icons/fa";

function IntroTwo() {
  return (
    <section className="relative w-full h-[500px] sm:h-[500px] xs:h-[300px] flex justify-center items-center overflow- px-2 text-white">
     
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/luffy.mp4" 
        autoPlay
        muted
        loop
        playsInline
      />

    
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

      
      <div className="relative z-20 flex flex-col md:flex-row justify-center items-center text-center px-4">
        <h1 className="text-6xl md:text-8xl font-semibold mb-8 md:mb-0 md:mr-12 max-w-[600px]">
          Why SugoiRead?
        </h1>

        <div className="flex flex-col gap-y-4 md:gap-y-6 md:border-l-4 md:pl-6 border-orange-500">
          <div className="flex items-center justify-center gap-x-3 w-[220px] p-2 rounded-full bg-orange-500 border-b-4 border-orange-600 hover:brightness-110 transition">
            <BsIncognito size={22} />
            <span className="text-sm">Anonymous Reviews</span>
          </div>
          <div className="flex items-center justify-center gap-x-3 w-[220px] p-2 rounded-full bg-orange-500 border-b-4 border-orange-600 hover:brightness-110 transition">
            <MdNewLabel size={22} />
            <span className="text-sm">Suggest New Manga</span>
          </div>
          <div className="flex items-center justify-center gap-x-3 w-[220px] p-2 rounded-full bg-orange-500 border-b-4 border-orange-600 hover:brightness-110 transition">
            <FaTrophy size={22} />
            <span className="text-sm">Only the Best Picks</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroTwo;
