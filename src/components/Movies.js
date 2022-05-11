import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { added, sold } from '../redux/movies/movieSlice';

 const Movies = ()=>{
    const movies = useSelector((state)=>state.movies)
    const dispatch = useDispatch()
    const handleAdd=(e)=>{
      e.preventDefault()
      dispatch(added(20))
    }
    const handleSell=(e)=>{
      e.preventDefault()
      dispatch(sold(5))
    }
    return (
      <div>
          <h1>Movies Shop</h1>
          <h3>Available Movies : {movies.movieInfo.quantity} </h3>
          <button style={stylesAdd} onClick={handleAdd}>Buy Movie</button>
          <button style={stylesSell} onClick={handleSell}>Buy Movie</button>
      </div>
    )
}
const stylesAdd ={
    "backgroundColor":"green",
    "color":"#fff",
    "padding":"15px 10px",
    "borderStyle":"none",
    "cursor":"pointer",
    "fontWeight":"Bold",
    "marginRight":"5px"
}
const stylesSell ={
  "backgroundColor":"blue",
  "color":"#fff",
  "padding":"15px 10px",
  "borderStyle":"none",
  "cursor":"pointer",
  "fontWeight":"Bold",
  "marginRight":"5px"
}
export default Movies