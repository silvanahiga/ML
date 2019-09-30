import React from 'react';
import './style.css';
import { Link } from "react-router-dom";




class Home extends React.Component {

  render() {
    return (
      <React.Fragment>

        <div className="logo"><img src="https://static.mlstatic.com/org-img/homesnw/img/ml-logo@2x.png?v=4.0" alt=""></img></div>
        <div className="links">
        <Link className="url" to="/carousel/MLA" >Argentina</Link>
        <Link className="url" to="/carousel/MBO">Bolivia</Link>
        <Link className="url" to="/carousel/MLB">Brasil</Link>
        <Link className="url" to="/carousel/MCO">Colombia</Link>
        </div>


      </React.Fragment>
    );

  }
}



export default Home