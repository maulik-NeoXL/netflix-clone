import React, {useEffect, useState} from 'react'
import requests from '../Requests'
import axios from "axios";

export default function Main (){

  const [movies, setMovies] = useState([])

  const movie = movies[(Math.floor(Math.random()* movies.length))]

  useEffect(() =>
  {
    axios.get(requests.requestPopular).then((response)=>{
        setMovies(response.data.results)
    })
  }, []);
  //console.log(movie)

  const truncate = (str, num) => {
          if(str?.length > num){
            return str.slice(0, num) + "..."
          } else{
            return str;
          }
  }

  return(
    <div className='w-full h-[550px] text-white'>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[550px] md:bg-gradient-to-r from-black '></div>
        <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
        <div className='absolute w-full top-[25%] p-4 md: p-8'>
          <h1 className='text-2xl md:text-6xl font-bold'> {movie?.title}</h1>
          <div className='my-4'>
            <button className='border border-gray-300 text-black bg-gray-300 py-2 px-5'> Play Now</button>
            <button className='border border-gray-300 text-white bg-black py-2 px-5 ml-4'> Watch Later</button>
          </div>
          <p className='text-gray-400 text-sm'> Released: {movie?.release_date}</p>
          <p className='text-white w-full pt-2 text-justify md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]' > {truncate(movie?.overview, 250)}</p>
        </div>
      </div>
      
    </div>
  )
}
