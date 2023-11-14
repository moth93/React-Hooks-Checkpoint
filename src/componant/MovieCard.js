import React from 'react'
//import "./MovieCard.css"
import { Card } from 'react-bootstrap'
import { useState } from "react";
import { Rating } from 'react-simple-star-rating';
import ReactStars from 'react-stars';



function MovieCard({movie}) {
  const [star, setStar] = useState(0);

  const onChange=(nextValue)=>{
      setStar(nextValue)
  }
  return ( 
    <div className="mainCard">  
  <Card className="bg-dark text-white">
   <Card.Img variant="top" src={movie.img} alt="card image" className="CardImage"/>
   <Card.ImgOverlay>
        <Card.Title className="">{movie.title}</Card.Title>
        <Card.Text className="">
        {movie.description}
        </Card.Text>
        <Card.Link href="#">{}</Card.Link>
        <ReactStars
  count={5}
value={movie.rating}
  size={24}
  color2={'#ffd700'} />
      </Card.ImgOverlay>
      
    </Card>
    </div> 
  )
}

export default MovieCard