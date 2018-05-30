import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Router from './Router';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="page-container">
          <Router />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
