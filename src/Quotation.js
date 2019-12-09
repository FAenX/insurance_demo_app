import React from 'react';
import { Card, ListGroup } from "react-bootstrap"
import LoaderButton from "./LoaderButton";
import {withRouter} from "react-router-dom";

class Quotation extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            carValue: "",
            cover: "",
            regNo: "",
            tonnes: "",
            premium: "",
            isLoading:false
        }
    }

    handleSubmit = () =>{
        this.props.history.push("/payment-options")
    }

    render(){
        return(
            <div className="quotation">
            <Card >
            <Card.Title>Quotation</Card.Title>
            <Card.Subtitle className="mb-2 text-muted"> Quote ID: </Card.Subtitle>
            <ListGroup variant="flush">
                <ListGroup.Item>Email: <b>{this.props.data.quotation.email} </b></ListGroup.Item>
                <ListGroup.Item>REG Number:  <b>{this.props.data.quotation.regNo}</b> </ListGroup.Item>
                <ListGroup.Item>Vehicle value:  <b>{this.props.data.quotation.carValue}</b> </ListGroup.Item>
                <ListGroup.Item>Vehicle Capacity:  <b>{this.props.data.quotation.tonnes}</b> </ListGroup.Item>
                <ListGroup.Item>Premium KSH: <b>{this.props.data.quotation.premium}</b></ListGroup.Item>
                <ListGroup.Item>Cover: <b>{this.props.data.quotation.cover}</b></ListGroup.Item>
            </ListGroup>
            </Card>
            <LoaderButton variant="primary" type="submit" isLoading={this.state.isLoading} onClick={this.handleSubmit}>
               Accept
            </LoaderButton>
            </div>
        )
    }
}

export default withRouter(Quotation);