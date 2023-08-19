import React from 'react'

const Rooms = () => {
  return (
    <div className='max-w-[1400px] h-[500px] mt-10 bg-blue-300 m-auto p-4 grid lg:grid-cols-3'>
        <div className='lg:col-span-1 relative lg:top-20 my-10'>
        <h3 className='text-2xl lg:3xl font-bold'>Fine Interior Rooms</h3>
        <p className='pt-4'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error ipsam
          rerum iusto excepturi similique minus?
        </p>
        </div>

        <div className='lg:col-span-2 grid grid-cols-2 grid-rows-2 h-[600px]'>
        <img
        className='object-cover p-2 row-span-1 w-full h-full'
          src='/room.jpg'
          alt='/'
        />
        <img
        className='object-cover p-2 row-span-2 w-full h-full'
          src='/room.jpg'
          alt='/'
        /><img
        className='object-cover p-2 row-span-1 w-full h-full'
          src='/room.jpg'
          alt='/'
        />
        </div>
    </div>
  )
}

export default Rooms