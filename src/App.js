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
      totalPaid: 0,
      average: 0,
      isPressed: false
    }
    this.userOneProps = this.userOneProps.bind(this);
    this.userTwoProps = this.userTwoProps.bind(this);
    this.userThreeProps = this.userThreeProps.bind(this);
  }
  // get children props
  userOneProps(name, value){
    this.setState({
      nameOne: name,
      paidOne: value
    })
  }
  userTwoProps(name, value) {
    this.setState({
      nameTwo: name,
      paidTwo: value
    })
  }
  userThreeProps(name, value) {
    this.setState({
      nameThree: name,
      paidThree: value
    })
  }
  // Calculates the total bill and each persons share after children props have been recieved
  onClick(e){
    e.preventDefault(e);
    this.setState({
      totalPaid: (parseFloat(this.state.paidOne) + parseFloat(this.state.paidTwo) + parseFloat(this.state.paidThree)).toFixed(2),
      average: ((parseFloat(this.state.paidOne) + parseFloat(this.state.paidTwo) + parseFloat(this.state.paidThree))/3).toFixed(2),
      isPressed: true
    })
  }

  render() {
    return (
      <div className="App">
        <Row>
          <Col s={12} m={6}>
            <h2>Trip Calculator</h2>
          </Col>
          <Col s={12} m={6}>
            <Button className="calc" onClick={(e) => this.onClick(e)}> Calculate Dues</Button>
          </Col>
        </Row>
        {/* Using React-materialize to make components responsive, but also inline for larger screens */}
        <Row>
          <Col s={12} m={4}>
            <UserOne userOneProps={this.userOneProps}/>
          </Col>
          <Col s={12} m={4}>
            <UserTwo userTwoProps={this.userTwoProps}/>
          </Col>
          <Col s={12} m={4}>
            <UserThree userThreeProps={this.userThreeProps} />
          </Col>
        </Row>
        <Tally 
          nameOne={this.state.nameOne} 
          nameTwo={this.state.nameTwo}
          nameThree={this.state.nameThree}
          paidOne={parseFloat(this.state.paidOne)}
          paidTwo={parseFloat(this.state.paidTwo)}
          paidThree={parseFloat(this.state.paidThree)}
          totalPaid={parseFloat(this.state.totalPaid)}
          average={parseFloat(this.state.average)}
          isPressed={this.state.isPressed}
          />
      </div>
    );
  }
}

export default App;
