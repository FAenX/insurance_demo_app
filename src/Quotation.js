import React from 'react';
import { Card, ListGroup } from "react-bootstrap"

class Quotation extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            carValue: "",
            cover: "",
            responseData: ""
        }
    }

    render(){
        return(
            <div className="quotation">
            <Card >
                <h1>{this.props.data.cover}</h1>
            <ListGroup variant="flush">
                <ListGroup.Item>Email: {this.props.data.email} </ListGroup.Item>
                <ListGroup.Item>REG Number:  {this.props.data.reg} </ListGroup.Item>
                <ListGroup.Item>Vehicle value:  {this.props.data.value} </ListGroup.Item>
                <ListGroup.Item>Premium KSH: {this.props.data.premium}</ListGroup.Item>
            </ListGroup>
            </Card>
            </div>
        )
    }
}

export default Quotation;