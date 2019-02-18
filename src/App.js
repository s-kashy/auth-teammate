import React, { Component } from 'react';
import Auth from "./Auth/Auth"
import SingIn from "./SingIn/SingIn"
import SportCard from "./SportTypeCard/SportTypeCard"
import './App.css';

class App extends Component {
 
  onChangeHandler = (e) => { 

  }
  render() {
    return (
      <div className="app" >
     <SportCard/>
      </div>

    );
  }
}

export default App;
