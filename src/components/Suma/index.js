import React from 'react';
import Input from '../Input';


class Suma extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      num1: "",
      num2: "",
      resultados: "",
    }

    
  }


  // handleChange(e) {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   this.setState({
  //     [name]: value,  //voy a agarra el contenido de la variable "name" en este caso es e.target.name
  //   })
  // }

  handleCallback(dataInput, name){
    console.log(dataInput, name)
    this.setState({
      [name]: dataInput

    })

  }

  handleClick() {
    console.log(parseInt(this.state.num1) + parseInt(this.state.num2))

    const total= parseInt(this.state.num1) + parseInt(this.state.num2)

    alert(total)
  
    
  }

  render() {

    return (
      <div>
        <Input dataInput={(data,name)=> this.handleCallback(data,name)} name="num1" />  
        <Input dataInput={(data, name)=> this.handleCallback(data,name)} name="num2"/>
        {/* <input name="num1" onChange={(e) => this.handleChange(e)} type="text" />
        <input name="num2" onChange={(e) => this.handleChange(e)} type="text" /> */}
    
        <button onClick={() => this.handleClick()}>Sumar</button>
      </div>
    );

  }
}


export default Suma;