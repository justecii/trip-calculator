import React, { Component } from 'react';
import {Input, Button, Row} from 'react-materialize';

class UserThree extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            valueOne: 0,
            valueTwo: 0,
            valueThree: 0,
            valueFour: 0,
            valueFive: 0,
        }
    }
    // give user a name to send to parent components
    submitName(e) {
        var set = e.target.value;
        this.setState({
            name: set
        });
    }
    //  change state for each line items total
    expenseOne(e) {
        var set = e.target.value;
        this.setState({
            valueOne: set
        });
    }
    expenseTwo(e) {
        var set = e.target.value;
        this.setState({
            valueTwo: set
        });
    }
    expenseThree(e) {
        var set = e.target.value;
        this.setState({
            valueThree: set
        });
    }
    expenseFour(e) {
        var set = e.target.value;
        this.setState({
            valueFour: set
        });
    }
    expenseFive(e) {
        var set = e.target.value;
        this.setState({
            valueFive: set
        });
    }

    // Submit button to send input props to parent components
    onClick(e) {
        e.preventDefault();
        var expenseSum = (parseFloat(this.state.valueOne) + parseFloat(this.state.valueTwo) + parseFloat(this.state.valueThree) + parseFloat(this.state.valueFour) + parseFloat(this.state.valueFive)).toFixed(2);
        this.props.userThreeProps(this.state.name, expenseSum);
    }
    render() {
        return (
            <div className="users">
                <h4 className="header">Friend Three</h4>
                <Row>
                    <Input s={6} label="Name" onInput={(e) => this.submitName(e)} />
                    <Input s={9} label="Expense" />
                    <Input s={3} label="Total" onInput={(e) => this.expenseOne(e)} />
                    <Input s={9} label="Expense" />
                    <Input s={3} label="Total" onInput={(e) => this.expenseTwo(e)} />
                    <Input s={9} label="Expense" />
                    <Input s={3} label="Total" onInput={(e) => this.expenseThree(e)} />
                    <Input s={9} label="Expense" />
                    <Input s={3} label="Total" onInput={(e) => this.expenseFour(e)} />
                    <Input s={9} label="Expense" />
                    <Input s={3} label="Total" onInput={(e) => this.expenseFive(e)} />
                </Row>
                <Button className="submitBtn" s={12} onClick={(e) => this.onClick(e)}>Submit</Button>
            </div>
        )
    }
}

export default UserThree;