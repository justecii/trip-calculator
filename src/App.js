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
      average: 0
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
    // var totalExpenses = (parseFloat(this.state.paidOne) + parseFloat(this.state.paidTwo) + parseFloat(this.state.paidThree)).toFixed(2);
    // this.setState({
    //   totalPaid: totalExpenses
    // })
    console.log(this.state)
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

  onClick(e){
    e.preventDefault(e);
    this.setState({
      totalPaid: (parseFloat(this.state.paidOne) + parseFloat(this.state.paidTwo) + parseFloat(this.state.paidThree)).toFixed(2),
      average: ((parseFloat(this.state.paidOne) + parseFloat(this.state.paidTwo) + parseFloat(this.state.paidThree))/3).toFixed(2)
    })
    console.log(this.state)
  }

  render() {
    return (
      <div className="App">
        <h2>Trip Calculator</h2>
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
        <Button onClick={(e) => this.onClick(e)}> Calculate </Button>
        <Tally 
          nameOne={this.state.nameOne} 
          nameTwo={this.state.nameTwo}
          nameThree={this.state.nameThree}
          paidOne={this.state.paidOne}
          paidTwo={this.state.paidTwo}
          paidThree={this.state.paidThree}
          totalPaid={this.state.totalPaid}
          average={this.state.average}
          />
      </div>
    );
  }
}

export default App;
