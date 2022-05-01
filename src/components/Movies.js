import React, { Component } from 'react'

 class Movies extends Component {
  render() {
    return (
      <div>
          <h1>Movies Shop</h1>
          <h3>Available Movies</h3>
          <button style={styles}>Rend Movie</button>
      </div>
    )
  }
}
const styles ={
    "backgroundColor":"blue",
    "color":"#fff",
    "padding":"15px 10px",
    "borderStyle":"none",
    "cursor":"pointer",
    "fontWeight":"Bold"
}
export default Movies