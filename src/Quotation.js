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
            <Card style={{ width: '30rem' }}>
                <h1>{this.props.data.cover}</h1>
            <ListGroup variant="flush">
                <ListGroup.Item>Email <h2>{this.props.data.email} </h2></ListGroup.Item>
                <ListGroup.Item>REG Number <h2>{this.props.data.reg} </h2></ListGroup.Item>
                <ListGroup.Item>Vehicle value <h2>{this.props.data.value} </h2></ListGroup.Item>
                <ListGroup.Item>Premium  <h2>KSH {this.props.data.premium} </h2></ListGroup.Item>
            </ListGroup>
            </Card>
            </div>
        )
    }
}

export default Quotation;