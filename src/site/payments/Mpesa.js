import React from "react"
import {Card, ListGroup, Alert} from "react-bootstrap"
import {withRouter} from "react-router-dom"

class Mpesa extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            transactionCode: "",
            mobileNumber: "",
            serverResponse: null
        }
    }

    componentDidMount = () =>{
        const data = {acc: "HDYDJDKD"};
        const url = "api/v1/payments/mpesa/"
        const paymentAcknowledgement = fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
              },

        }).then((res)=>res).catch((err)=>err);

        paymentAcknowledgement.then((res)=>{
            res.json().then((json)=>{
                if (json.status ==="success"){
                    this.setState({
                        transactionCode: json.data.transaction_code,
                        mobileNumber: json.data.mobile_number,
                        serverResponse: json.status
                    })
                } else if(json.status === "error") {
                    console.log(json)
                    this.setState({
                        serverResponse: json.data
                    })
                    
                } else {
                    console.log(res)
                }
            }).catch((error)=>{
                console.log(error)
            });
        }).catch(err=>{
            console.log(err)
        });
    }

    render(){
        let responseAlert;
        let paymentAlert;

        if (this.state.serverResponse === "success"){
           responseAlert = <Alert variant="success">{this.state.serverResponse}</Alert>
           paymentAlert = <Alert variant="success"> Your paymen has been processed successfully</Alert>
        }else{
            responseAlert = <Alert variant="warning">{this.state.serverResponse}</Alert>
            paymentAlert = <Alert variant="danger"> Oops! Your payment has not been recieved</Alert>
        }

        return(
            <div>
            {responseAlert}
            {paymentAlert}
            <Card>
            <Card.Title>Receipt</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">TRANSACTION CODE: <b>{this.state.transactionCode}</b></Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">Mobile Number: <b>{this.state.mobileNumber}</b></Card.Subtitle>
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
            </div>
        )
    }
}

export default withRouter(Mpesa)