import React from "react";
import "./style.css"

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  handleChange(e) {
    console.log(e.target.value)

  }

  render() {
    return (
      <input className="input" placeholder="buscar" onChange={(e) => this.handleChange(e)} type="text"></input>

    )
  }
}






export default Search