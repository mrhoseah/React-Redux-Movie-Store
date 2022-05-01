import React, { Component } from 'react';

 class Movies extends Component {
     constructor(props){
         super()
     }
  render() {
    return (
      <div>
          <h1>Movies Shop</h1>
          <h3>Available Movies {this.props.movies}</h3>
          <button style={styles}>Buy Movie</button>
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