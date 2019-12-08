import React from "react";
import { Card} from "react-bootstrap"
import mpesaLogo from "./assets/images/mpesa.png"
import mastercard from "./assets/images/mastercard.png"
import paypall from "./assets/images/download.jpeg"
import {withRouter} from "react-router-dom"
import Spin from "./Spin"

class PaymentOptions extends React.Component {
    constructor(props){
        super(props)
        this.state={
            instructionsDisplay: "block",
            selectedPaymentOption: "",
            isLoading: false
        }
    }

    componentDidMount = () => {
        this.setState ({
            instryctionsDisplay: "none",
            selectedPaymentOption: "",
            isLoading: false
        })
    }
    
    handleSelect = (event) =>{
        event.preventDefault()
        this.setState({
            selectedPaymentOption: event.target.id
        })

        setTimeout(()=>this.handleRedirect(), 1000)

    }

    handleRedirect =()=>{
        this.setState({
            isLoading: true,
        })
        if (this.state.selectedPaymentOption !== "") {
            this.props.history.push(`/${this.state.selectedPaymentOption}`)
        }
    }
      
    render(){
        return(
            <div className="payment-options" >
                <div className="p-option">
                <Card style={{ width: '18rem' }}  id="mpesa" onClick={this.handleSelect}>
                <Card.Title id="mpesa">Card Title</Card.Title>
                <Card.Img variant="top" src={mpesaLogo} id="mpesa"/>
                <Card.Body id="mpesa">   
                    Click to pay
                </Card.Body>
                <Spin isLoading={this.state.isLoading}></Spin>
                </Card>

                </div>

                <div className="p-option">
                <Card style={{ width: '18rem' }} id="mastercard" onClick={this.handleSelect}>
                <Card.Title>Card Title</Card.Title>
                <Card.Img variant="top" src={mastercard} />
                <Card.Body>   
                    Click to pay
                </Card.Body>
                   
                
                </Card>

                </div>

                <div className="p-option">
                <Card style={{ width: '18rem' }}  id="paypall" onClick={this.handleSelect}> 
                <Card.Title>Card Title</Card.Title>
                <Card.Img variant="top" src={paypall} />
                <Card.Body>   
                    Click to pay
                </Card.Body>
                </Card>
                    
                
                </div>
            </div>
        )
    }
}

export default  withRouter(PaymentOptions);