import React, { Component } from "react";
import { NavLink } from 'react-router-dom'; 

import Router from "./Router";

const Navigation = (props) => <nav>
  <ul>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/login'>Login</NavLink></li>
    <li><NavLink to='/select'>Select</NavLink></li>
  </ul>
</nav>

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Router />
      </div>
    );
  }
}

export default App;
