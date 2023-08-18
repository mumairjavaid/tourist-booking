import React from 'react'

const Plans = () => {
  return (
    <div className='grid lg:grid-cols-2 max-w-[1400px] m-auto '>
        <div className='grid grid-cols-2 p-4 h-[80vh] grid-rows-6'>
            <img src="/beach-unsplash.jpg" className='row-span-3 p-2 object-cover w-full h-full'  alt="/" />
            <img src="/beach-unsplash.jpg" className='row-span-2 p-2 object-cover w-full h-full' alt="/" />
            <img src="/beach-unsplash.jpg" className='row-span-2 p-2 object-cover w-full h-full' alt="/" />
            <img src="/beach-unsplash.jpg" className='row-span-3 p-2 object-cover w-full h-full' alt="/" />
            <img src="/beach-unsplash.jpg" className='row-span-2 p-2 object-cover w-full h-full' alt="/" />
        </div>
        <div className='flex justify-center flex-col px-3'>
        <h3 className='text-5xl md:text-6xl font-bold'>Plan Your Next Trip</h3>
        <p className='text-2xl py-6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          nam?
        </p>
        <p className='pb-6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
          voluptates nostrum dolorum reprehenderit error! Doloribus est illo
          eius saepe? Molestias sapiente perspiciatis doloribus consectetur
          nihil facilis aliquid eaque vel quisquam.
        </p>
        <div>
          <button className='border-black bg-gray-200 rounded p-2 mr-4 hover:shadow-xl'>
            Learn More
          </button>
          <button className='bg-black text-white rounded p-2 border-black hover:shadow-xl'>Book Your Trip</button>
        </div>
        </div>
    </div>
  )
}

export default Plans