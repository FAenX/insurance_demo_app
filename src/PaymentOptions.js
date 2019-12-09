import React from "react";
import { Card, Accordion, Button, Alert} from "react-bootstrap"
import mpesaLogo from "./assets/images/mpesa.png"
import mastercard from "./assets/images/mastercard.png"
import paypall from "./assets/images/download.jpeg"
import crediCartPlaceHolder from "./assets/images/creditcardplaceholder.gif"
import {withRouter} from "react-router-dom"
import LoaderButton from "./LoaderButton"

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
        const id = event.target.parentNode.parentNode.parentNode.parentNode.id
        console.log(id)
        this.setState({
            selectedPaymentOption: id,
        })

    }

    handleSubmit = () => {
        this.setState ({
            isLoading: true
        })
        setTimeout(()=>this.handleRedirect(), 1000)
    }

    handleRedirect =()=>{
        
        if (this.state.selectedPaymentOption !== "") {
            this.props.history.push(`/${this.state.selectedPaymentOption}`)
        }
    }
      
    render(){
        let paymentOption;
        if (this.state.selectedPaymentOption === "mpesa"){
            paymentOption = <div className="mpesa">
                <Alert  variant="info"> To Pay your bill (KES. KES 650) via MPESA. Follow the Steps Below. Once you receive a successful reply from Mpesa. Click the complete button bellow. </Alert>
                <ol>
                        <li>Go to M-PESA on your phone </li>
                        <li>Select Pay Bill option</li>
                        <li>Enter Business no. 206206</li>
                        <li>Enter Account no. BDZMWVS</li>
                        <li>Enter the Amount. KES 650</li>
                        <li>Enter your M-PESA PIN and Send</li>
                        <li>You will receive a confirmation SMS from MPESA</li>

                </ol>
                        
                    </div>
        }else if (this.state.selectedPaymentOption === "mastercard"){
            paymentOption = <div className="mastercard">
                            <Alert  variant="info"> To Pay your bill ( KES 669.50) via Your Visa or MasterCard. Enter Your Card Details Below then click 'Submit' </Alert>
                            <Alert variant="warning"> Please Note : Use of stolen cards is an offence punishable by law .</Alert>
                            <img alt="crediCartPlaceHolder" src={crediCartPlaceHolder}/>
                            </div>
                            
        }else if (this.state.selectedPaymentOption === "paypall"){
            paymentOption = <Alert  variant="info">  To Pay your bill ( KES 669.50) via Your Visa or MasterCard. Enter Your Card Details Below then click 'Submit'</Alert>
            
        }
        let instructions = <Accordion defaultActiveKey="">
                            <Card>
                            <Card.Header onClick={this.handleSelect}>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0"> Select </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                {paymentOption}
                                <LoaderButton variant="primary" type="submit" isLoading={this.state.isLoading} onClick={this.handleSubmit}>
                                   proceed
                                </LoaderButton>
                                </Card.Body>
                            </Accordion.Collapse>
                            </Card>
                        </Accordion>

        return(
            <div className="payment-options" >
                <div className="p-option">
                <Card  id="mpesa" >
                <Card.Title id="mpesa">Mpesa</Card.Title>
                <Card.Img variant="top" src={mpesaLogo} id="mpesa"/>
                    {instructions}
                </Card>

                </div>

                <div className="p-option">
                <Card id="mastercard" >
                <Card.Title>Visa/MasterCard</Card.Title>
                <Card.Img variant="top" src={mastercard} /> 
                {instructions}                
                
                </Card>

                </div>

                <div className="p-option">
                <Card  id="paypall" > 
                <Card.Title>Paypall</Card.Title>
                <Card.Img variant="top" src={paypall} />
                {instructions}

                </Card>
                    
                
                </div>
            </div>
        )
    }
}

export default  withRouter(PaymentOptions);