import React from 'react';
import "./style.css"

class Products extends React.Component {
  constructor(props) {
    super(props)
    this.currencyMap = {  //esto no va a tener actualizacion es para la parte del $
      "ARS": "$",
      "COP": "$",
      "BRL": "$",
      "BOB": "$"

      //si la api te devuelve ars cambiar por $


    }
  }

  render() {
    return (

      <div className="box">
        <img className="poster_product" src={this.props.thumbnail} alt=""/>
        <p>{this.props.name}</p>
        <p>{this.currencyMap[this.props.currency]}{this.props.price}</p>
        {this.currency}
      </div>
    )
  }




}





export default Products
