import React from 'react'
import Image from 'next/image'

function Carousel() {
  return (
    <main className='relative h-[400px] sm:h-[300px] lg:h-[400px] xl:h-[500px] 2xl:h-[600px] bg-red-500'>
        <Image src="https://i.ibb.co/TDf8m6L/airbnb-banner.jpg" layout='fill' objectfit="contain"/>
        <div className='absolute top-1/2 w-full text-center'>
            <p className='text-white text-3xl font-bold shadow-sm'>Not sure where to go ? Perfect</p>
            <button className='text-red-400 text-xl px-6 py-3 font-bold my-5 bg-white rounded-full shadow-[10px_10px_141px_3px_rgba(255,255,255,0.75);] hover:shadow-[10px_10px_120px_8px_rgba(255,255,255,0.75)] active:scale-90 transition duration-200'>I'm flexible</button>
        </div>
    </main>
  )
}

export default Carousel