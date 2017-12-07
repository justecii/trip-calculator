import React, { Component } from 'react';
import './App.css';
import UserOne from './UserOne';
import UserTwo from './UserTwo';
import UserThree from './UserThree';
import Tally from './Tally';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Trip Calculator</h1>
        <UserOne />
        <UserTwo />
        <UserThree />
        <Tally />
      </div>
    );
  }
}

export default App;
