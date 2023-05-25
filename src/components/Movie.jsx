import React, {useState} from "react";
import {FaHeart, FaRegHeart} from "react-icons/fa";

export default function Movie({item}){

  const [like, setLike] = useState(false)

  return(
    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative pl-4 mt-2'>
      <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`} alt={item.title} />
      <div className='absolute top-0 left-0 w-full h-full opacity-0 hover:bg-black/80 hover:opacity-100 text-white'>
        <p className='white-space-normal text-sx md:text-s font-bold flex justify-center items-center h-full text-center'> {item?.title}</p>
        <p> {like? <FaHeart className='absolute top-4 right-4 text-gray-400'/> : <FaRegHeart className='absolute top-3 right-3 text-gray-400'/>} </p>
      </div>
    </div>
  )
}
