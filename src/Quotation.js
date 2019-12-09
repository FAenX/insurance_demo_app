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
                <h1>{this.props.data.quotation.cover}</h1>
            <ListGroup variant="flush">
                <ListGroup.Item>Email: {this.props.data.quotation.email} </ListGroup.Item>
                <ListGroup.Item>REG Number:  {this.props.data.quotation.regNo} </ListGroup.Item>
                <ListGroup.Item>Vehicle value:  {this.props.data.quotation.carValue} </ListGroup.Item>
                <ListGroup.Item>Vehicle Capacity:  {this.props.data.quotation.tonnes} </ListGroup.Item>
                <ListGroup.Item>Premium KSH: {this.props.data.quotation.premium}</ListGroup.Item>
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