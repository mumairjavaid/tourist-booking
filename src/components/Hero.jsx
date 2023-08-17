import React from 'react'

const Hero = () => {
  return (
    <>
    <div className="w-full h-screen relative ">
        <img
          className="w-full h-full absolute top-0 left-0 object-cover"
          src="beach.jpg"
          alt="beach"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
        <div className=" lg:max-w-[2400px] p-4 absolute left-0 top-[40%] md:left-[10%]">
          <p className="text-white text-lg">All Inclusive</p>
          <h1 className="text-4xl text-white font-bold md:text-7xl">
            Private beaches and Gateways
          </h1>
          <p className="text-white py-2 md:py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            quidem animi cumque voluptatum unde exercitationem nisi laboriosam
            maxime atque reprehenderit!
          </p>
          <button className='bg-black text-white rounded-xl px-2 py-2'>Reserve Now</button>
        </div>
      </div>
    </>
  )
}

export default Hero