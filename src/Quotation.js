import React from 'react';
import { Card, ListGroup } from "react-bootstrap"

class Quotation extends React.Component {

    render(){
        return(
            <div className="quotation">
            <Card >
                <h1>{this.props.data.quotation.cover}</h1>
            <ListGroup variant="flush">
                <ListGroup.Item>Email: {this.props.data.quotation.email} </ListGroup.Item>
                <ListGroup.Item>REG Number:  {this.props.data.quotation.regNo} </ListGroup.Item>
                <ListGroup.Item>Vehicle value:  {this.props.data.quotation.carValue} </ListGroup.Item>
                <ListGroup.Item>Vehicle Capacity:  {this.props.data.quotation.tonnes} </ListGroup.Item>
                <ListGroup.Item>Premium KSH: {this.props.data.quotation.premium}</ListGroup.Item>
            </ListGroup>
            </Card>
            </div>
        )
    }
}

export default Quotation;