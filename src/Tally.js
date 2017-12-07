import React, {Component} from 'react';
import {Row, Col} from 'react-materialize';

class Tally extends Component {
    constructor(props){
        super(props)
        this.state={
            totalValue: 0
        }
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
    }
    componentDidUpdate(){
        let total = (parseFloat(this.props.paidOne) + parseFloat(this.props.paidTwo))
        console.log(total)
        // if (this.props.paidOne !== total) {
        //     this.setState({
        //         totalValue: total
        //     })
        // }
        
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
                            <td>Number</td>
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