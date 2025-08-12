import { BiSolidBookAdd } from "react-icons/bi";

function IntroThree({setModal}) {
  
  return (
    <section className='relative flex w-full h-[550px] sm:h-[500px] xs:h-[300px] justify-center items-center text-white overflow-hidden px-1'>

        {/*back bg*/}
        <video className='absolute top-0 left-0 w-full h-full z-0 object-cover' src='/haikyuu.mp4'
        loop
        autoPlay
        muted
        playsInline
        />

        {/*overlay*/}
        <div className='absolute top-0 left-0 bg-black/50 w-full h-full z-10'/>
        
        {/*content*/}
        <div className='relative z-20'>
           <div className='flex flex-col items-center gap-y-10'>
              <h1 className='text-6xl md:text-8xl font-semibold'>Suggest a manga</h1>
               <p className='italic text-xl'>The council of otakus will judge your suggestion </p>
               <BiSolidBookAdd onClick={()=>setModal(true)} className='cursor-pointer border rounded-full p-1 hover:scale-106 transition duration-300' size={40}/>
           </div>
        </div>

        

    </section>
  )
}

export default IntroThree