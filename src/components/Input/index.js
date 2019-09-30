import React from 'react';




class Input extends React.Component {
  
  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
   
    this.props.dataInput(value, name)
  }

    render() {
      return (
       <div>
             <input name={this.props.name} onChange={(e) => this.handleChange(e)} type="text" />
      
       </div>
      );
  
    }
  }

export default Input;