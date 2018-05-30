import React, { Component } from 'react';
import './App.css';
import Router from './Router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="page-container">
          <Router />
        </div>  
      </div>
    );
  }
}

export default App;
