import React, { Component } from 'react';
import './App.css';
import UserOne from './UserOne';
import UserTwo from './UserTwo';
import UserThree from './UserThree';
import Tally from './Tally';
import { Row, Col } from 'react-materialize';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Trip Calculator</h1>
        {/* Using React-materialize to make components responsive, but also inline for larger screens */}
        <Row>
          <Col s={12} m={4}>
            <UserOne />
          </Col>
          <Col s={12} m={4}>
            <UserTwo />
          </Col>
          <Col s={12} m={4}>
            <UserThree />
          </Col>
        </Row>
        <Row>
          <Col s={12}>
            <Tally />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
