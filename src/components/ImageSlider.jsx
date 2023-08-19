import React, { useState } from 'react'
import { FaChevronCircleRight,FaChevronCircleLeft } from 'react-icons/fa'
import { RxDotFilled } from 'react-icons/rx'
const ImageSlider = () => {
    const [index, setIndex] = useState(0)
        const slides = [
          {
            url: 'https://images.unsplash.com/photo-1464093515883-ec948246accb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2659&q=80',
            title: 'Lobster',
          },
          {
            url: 'https://images.unsplash.com/photo-1512132411229-c30391241dd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            title: 'Sushi',
          },
          {
            url: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            title: 'Pasta',
          },
          {
            url: 'https://images.unsplash.com/photo-1539136788836-5699e78bfc75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            title: 'Salmon',
          },
        ];
    const nextSlide=()=>{
        const isLast = index == slides.length - 1;
        const next = isLast ? 0 : index+1 ;
        setIndex(next);  
    }
    const previousSlide=()=>{
        const isFirst = index == 0;
        const slide = isFirst ? slides.length - 1 : index - 1;
        setIndex(slide)  
    }
    const moveToSlide = (slide) =>{
        setIndex(slide);
    }
  return (
    <div className='max-w-[1400px] relative m-auto py-16 mt-40 h-[800px] px-4'>
        <div className='bg-cover w-full h-full bg-center duration-500 rounded-2xl' style={{ backgroundImage: `url(${slides[index]?.url})` }} >
        </div>
        <div onClick={previousSlide} className='absolute top-[50%] left-[5%] cursor-pointer translate-y-[-50%]'><FaChevronCircleLeft size={30}/></div>
        <div onClick={nextSlide} className='absolute top-[50%] right-[5%] cursor-pointer translate-y-[-50%]'><FaChevronCircleRight size={30}/></div>
        <div className='py-4 flex justify-center'>
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} className='px-2'>
            <RxDotFilled onClick={()=>{moveToSlide(slideIndex)}} className='cursor-pointer' size={25} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageSlider