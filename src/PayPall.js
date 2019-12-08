import React from "react"
import {Card} from "react-bootstrap"
import {withRouter} from "react-router-dom"

class PayPall extends React.Component {
    render(){
        return(
            <Card style={{ width: '18rem'}}>
            <Card.Title>Card Title</Card.Title>
            <Card.Body>   
                <li>Instruction one </li>
                <li>Instruction two </li>
                <li>Instruction three </li>
            </Card.Body>
            </Card>
        )
    }
}

export default withRouter(PayPall)