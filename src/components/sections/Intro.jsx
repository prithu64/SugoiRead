import React from 'react'

function Intro() {
  return (
     <section className="w-full flex flex-col justify-center items-center text-center px-4 sm:px-6 py-10">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-[Bangers] text-white drop-shadow-md">
                Welcome to SugoiRead
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-200 mt-4 max-w-md sm:max-w-lg">
                Discover your next favorite manga from our curated collection.
              </p>
              <button className="mt-6 bg-pink-600 hover:bg-pink-700 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-base sm:text-lg shadow-md hover:scale-105 transition-all">
                Browse Manga
              </button>
      </section>
  )
}

export default Intro