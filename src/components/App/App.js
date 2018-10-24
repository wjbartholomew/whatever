import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import FamousPerson from '../FamousPerson/FamousPerson';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <FamousPerson /> 
      </div>
    );
  }
}

export default App;
