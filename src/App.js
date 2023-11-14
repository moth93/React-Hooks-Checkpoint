import './App.css';
import "./componant/Data.js"
import MovieList from './componant/MovieList.js';
import data from "./componant/Data.js"
import { useEffect, useState } from 'react';
import Filter from './componant/Filter.js';

function App() {
  const [rat,setRat]=useState(0)
  const [titl,setTitle]=useState("")
  const [movies,setMovies]=useState(data)
  useEffect(()=>{
    var movie= JSON.parse(localStorage.getItem("newmovie"))
    if(movie!=null){setMovies([...movies,movie])}
  },[])
  console.log(movies)
  
  return (
    <div className="App">
    <Filter setRat={setRat} setTitle={setTitle}/> 
    <MovieList  movies={movies} raTing={rat} tiTle={titl}/>
    </div>
  );
}

export default App;
