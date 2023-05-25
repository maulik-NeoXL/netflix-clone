import React, {useEffect, useState} from "react";
import axios from 'axios'
import Movie from "./Movie";

export default function Row({title, fetchURL}){

  const [movies, setMovies] = useState([])

  useEffect(() =>
  {
      axios.get(fetchURL).then((response) => {
        setMovies(response.data.results)
      })
  }, [fetchURL]);

  console.log(movies);

  return(
    <>
        <h2 className='text-white font-bold md:text-xl pl-8 mt-4'> {title}</h2>
      <div className='relative items-center flex'>
               <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                 {movies.map((item, id) => (
                   <Movie item={item} key={id}/>
                   ))}
               </div>
      </div>
    </>
  )
}
