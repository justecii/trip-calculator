import React, {Component} from 'react';
import {Row, Col} from 'react-materialize';

class Tally extends Component {
    constructor(props){
        super(props)
        this.state={
            highPayer: '',
            oneOwes: 0,
            twoOwes: 0,
            threeOwes: 0
        }
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
    }
    // calculates who owes who bases on values paid by each user
    componentDidUpdate(){
        console.log(this.props)
        if (this.state.highPayer === "") {
            if (this.props.paidOne > this.props.paidTwo && this.props.paidOne > this.props.paidThree) {
                this.setState({
                    highPayer: this.props.nameOne
                })
            } else if (this.props.paidTwo > this.props.paidOne && this.props.paidTwo > this.props.paidThree){
                this.setState({
                    highPayer: this.props.nameTwo
                })
            } else if (this.props.paidThree > this.props.paidTwo && this.props.paidThree > this.props.paidOne){
                this.setState({
                    highPayer: this.props.nameThree
                })
            }
        } else if (this.state.highPayer === this.props.nameOne){
            if (this.props.paidTwo > this.props.paidOne && this.props.paidTwo > this.props.paidThree) {
                this.setState({
                    highPayer: this.props.nameTwo
                })
            } else if (this.props.paidThree > this.props.paidTwo && this.props.paidThree > this.props.paidOne) {
                this.setState({
                    highPayer: this.props.nameThree
                })
            }
        } else if (this.state.highPayer === this.props.nameTwo){
            if (this.props.paidOne > this.props.paidTwo && this.props.paidOne > this.props.paidThree) {
                this.setState({
                    highPayer: this.props.nameOne
                })
            } else if (this.props.paidThree > this.props.paidTwo && this.props.paidThree > this.props.paidOne) {
                this.setState({
                    highPayer: this.props.nameThree
                })
            }
        } else if (this.state.highPayer === this.props.nameThree) {
            if (this.props.paidTwo > this.props.paidOne && this.props.paidTwo > this.props.paidThree) {
                this.setState({
                    highPayer: this.props.nameTwo
                })
            } else if (this.props.paidOne > this.props.paidTwo && this.props.paidOne > this.props.paidThree) {
                this.setState({
                    highPayer: this.props.nameOne
                })
            }
        }
        console.log(this.state)
    }
    
    
    render(){
        // Conditional formating for the table based on who isin debt.
        if (this.props.isPressed === false) {
            return (
                <div>
                    <h4>Press Caclulate Dues button to determine how much each person owes.</h4>
                </div>
            )
        } else if (this.state.highPayer === this.props.nameOne) {
            return (
                <div>
                    <div>
                        <Row>
                            <Col s={12} m={6}>
                                <h4>Total Expenses:</h4>
                                <p>${this.props.totalPaid}</p>
                                <h4>Average:</h4>
                                <p>${this.props.average}</p>
                            </Col>
                            <Col s={12} m={6}>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Paid</th>
                                            <th>Owes</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{this.props.nameTwo}</td>
                                            <td>${this.props.paidTwo}</td>
                                            <td>${(this.props.average - this.props.paidTwo).toFixed(2)}  to {this.state.highPayer}</td>
                                        </tr>
                                        <tr>
                                            <td>{this.props.nameThree}</td>
                                            <td>${this.props.paidThree}</td>
                                            <td>${(this.props.average - this.props.paidThree).toFixed(2)}  to {this.state.highPayer}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Col>
                        </Row>
                    </div>
                </div>
            )
        } else if (this.state.highPayer === this.props.nameTwo) {
            return (
                <div>
                    <Row>
                        <Col s={12} m={6}>
                            <h4>Total Expenses:</h4>
                            <p>${this.props.totalPaid}</p>
                            <h4>Average:</h4>
                            <p>${this.props.average}</p>
                        </Col>
                        <Col s={12} m={6}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Paid</th>
                                        <th>Owes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{this.props.nameOne}</td>
                                        <td>${this.props.paidOne}</td>
                                        <td>${(this.props.average - this.props.paidOne).toFixed(2)}  to {this.state.highPayer}</td>
                                    </tr>
                                    <tr>
                                        <td>{this.props.nameThree}</td>
                                        <td>${this.props.paidThree}</td>
                                        <td>${(this.props.average - this.props.paidThree).toFixed(2)}  to {this.state.highPayer}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Col>
                    </Row>
                </div>
            )
        } else if (this.state.highPayer === this.props.nameThree) {
            return (
                <div>
                    <Row>
                        <Col s={12} m={6}>
                            <h4>Total Expenses:</h4>
                            <p>${this.props.totalPaid}</p>
                            <h4>Average:</h4>
                            <p>${this.props.average}</p>
                        </Col>
                        <Col s={12} m={6}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Paid</th>
                                        <th>Owes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{this.props.nameOne}</td>
                                        <td>${this.props.paidOne}</td>
                                        <td>${(this.props.average - this.props.paidOne).toFixed(2)}  to {this.state.highPayer}</td>
                                    </tr>
                                    <tr>
                                        <td>{this.props.nameTwo}</td>
                                        <td>${this.props.paidTwo}</td>
                                        <td>${(this.props.average - this.props.paidTwo).toFixed(2)}  to {this.state.highPayer}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Col>
                    </Row >
                </div>
            )
        }     
    }
}

export default Tally;