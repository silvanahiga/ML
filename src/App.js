import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Carousel from "./components/Carousel"
import Home from "./components/Home";
import Suma from "./components/Suma"

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Router>

          <Route path="/" exact component={Home} />
          <Route path="/carousel/:site" component={Carousel} />
          <Route path="/suma" component={Suma} />
      
        </Router>


      </div>
    );

  }
}

export default App;
