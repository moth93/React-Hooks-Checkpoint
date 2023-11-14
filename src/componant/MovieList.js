import React, { useState } from 'react'
import MovieCard from './MovieCard'

function MovieList({movies,raTing,tiTle}) {
    console.log(movies,raTing)
    const [rat,setrat]=useState(0)
  return (
    <div>  
        {
       (raTing!=0||tiTle.length!=0)?   
       movies.filter(e=>e.rating==raTing&&e.title.toLowerCase().includes(tiTle.toLowerCase()))
       .map(elt=>
       <MovieCard movie={elt} />):
       movies.map(elt=>
        <MovieCard movie={elt} />)
    }







    </div>
  )
}

export default MovieList