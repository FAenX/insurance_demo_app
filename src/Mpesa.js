import React from "react"
import {Card, ListGroup} from "react-bootstrap"
import {withRouter} from "react-router-dom"

class Mpesa extends React.Component {
    render(){
        return(
            <Card>
            <Card.Title>Receipt</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">MPESA TRANSACTION CODE: <b>HGD5854TR</b></Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">Trancaction id: <b>HGD5854TR</b></Card.Subtitle>
            <Card.Body>   
            <ListGroup variant="flush">
                <ListGroup.Item>Email: <b>{this.props.data.quotation.email} </b></ListGroup.Item>
                <ListGroup.Item>REG Number:  <b>{this.props.data.quotation.regNo}</b> </ListGroup.Item>
                <ListGroup.Item>Vehicle value:  <b>{this.props.data.quotation.carValue}</b> </ListGroup.Item>
                <ListGroup.Item>Vehicle Capacity:  <b>{this.props.data.quotation.tonnes}</b> </ListGroup.Item>
                <ListGroup.Item>Premium KSH: <b>{this.props.data.quotation.premium}</b></ListGroup.Item>
                <ListGroup.Item>Cover: <b>{this.props.data.quotation.cover}</b></ListGroup.Item>
            </ListGroup>
            </Card.Body>
            </Card>
        )
    }
}

export default withRouter(Mpesa)