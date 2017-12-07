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
        
    }
    
    render(){
        return (
            <div>
                <Row>
                    <Col s={6} m={3}>
                        <h4>Total Expenses:</h4>
                    </Col>
                    <Col s={6} m={3}>
                        <p>{this.props.totalPaid}</p>
                    </Col>
                    <Col s={6} m={3}>
                        <h4>Average:</h4>
                    </Col>
                    <Col s={6} m={3}>
                        <p>{this.props.average}</p>
                    </Col>
                </Row>
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
                            <td>{this.props.paidOne}</td>
                            <td>Number</td>
                        </tr>
                        <tr>
                            <td>{this.props.nameTwo}</td>
                            <td>{this.props.paidTwo}</td>
                            <td>${(this.props.average - this.props.paidTwo).toFixed(2)}  to {this.state.highPayer}</td>
                        </tr>
                        <tr>
                            <td>{this.props.nameThree}</td>
                            <td>{this.props.paidThree}</td>
                            <td>Number</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Tally;