import React, { Component } from 'react';
import './App.css';
import UserOne from './UserOne';
import UserTwo from './UserTwo';
import UserThree from './UserThree';
import Tally from './Tally';
import { Row, Col, Button } from 'react-materialize';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      nameOne: '',
      nameTwo: '',
      nameThree: '',
      paidOne: 0,
      paidTwo: 0,
      paidThree: 0,
      owesOne: 0,
      owesThree: 0
    }
    this.userOneProps = this.userOneProps.bind(this);
  }
  userOneProps(name, value){
    this.setState({
      nameOne: name,
      paidOne: value
    })
  }
  onClick(e){
    e.preventDefault(e);
    console.log(this.state)
  }
  render() {
    return (
      <div className="App">
        <h1>Trip Calculator</h1>
        {/* Using React-materialize to make components responsive, but also inline for larger screens */}
        <Row>
          <Col s={12} m={4}>
            <UserOne userOneProps={this.userOneProps}/>
          </Col>
          <Col s={12} m={4}>
            <UserTwo />
          </Col>
          <Col s={12} m={4}>
            <UserThree />
          </Col>
        </Row>
        <Button onClick={(e) => this.onClick(e)}> Get Props </Button>
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
