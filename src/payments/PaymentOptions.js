import React from "react";
import { Card, Button, Alert, Form} from "react-bootstrap"
import mpesaLogo from "../assets/images/mpesa.png"
import mastercard from "../assets/images/mastercard.png"
import paypall from "../assets/images/download.jpeg"
import crediCartPlaceHolder from "../assets/images/creditcardplaceholder.gif"
import {withRouter} from "react-router-dom"
import LoaderButton from "../LoaderButton"

class PaymentOptions extends React.Component {
    constructor(props){
        super(props)
        this.state={
            isLoading: false,
            display: "none",
            selectedPaymentOption: "",
            card: {
                cardExpiryMonth: "",
                cardExpiryYear: "",
                cardCVV: "",
                cardNumber: ""
            }
        }
    }

    componentDidMount = () => {
        this.setState ({
            display: "none",
            selectedPaymentOption: "",
            isLoading: false,
        })
    }
    
    handleSelect = (event) =>{
        event.preventDefault()
        const target = event.target.parentNode.children[2]
        target.style.display === "none" ? target.style.display = "block" : target.style.display = "none";
        

    }

    handleSubmit = (event) => {
        event.preventDefault()
        const id = event.target.id
        console.log(id)

        this.setState ({
            selectedPaymentOption: id,
            isLoading: true
        })
        setTimeout(()=>this.handleRedirect(), 1000)
    }

    handleRedirect =()=>{
        
        if (this.state.selectedPaymentOption !== "") {
            this.props.history.push("/mpesa")
        }
    }

    validateForm = () => {
        return this.state.card.cardNumber && this.state.card.cardCVV && 
                this.state.card.cardExpiryYear && this.state.card.cardExpiryMonth
    }

    handleCardForm =(event)=>{
        event.preventDefault()
        let id = event.target.id
        console.log(id)
        let card = this.state.card
        card[id] = event.target.value
        this.setState({
            card
        })

    }
      
    render(){
        let mpesaPaymentOption = <div className="mpesa">
            <Alert  variant="info"> To Pay your bill (KES. KES 650) via MPESA. Follow the Steps Below. Once you receive a successful reply from Mpesa. Click the complete button bellow. </Alert>
            <ol>
                    <li>Go to M-PESA on your phone </li>
                    <li>Select Pay Bill option</li>
                    <li>Enter Business no. XXXXX</li>
                    <li>Enter Account no. BDZMWVS</li>
                    <li>Enter the Amount. KES 7500</li>
                    <li>Enter your M-PESA PIN and Send</li>
                    <li>You will receive a confirmation SMS from MPESA</li>

            </ol>
            <LoaderButton variant="primary" type="submit"  id="mpesa" isLoading={this.state.isLoading} onClick={this.handleSubmit}>
                proceed
            </LoaderButton>
            </div>

        let cardPaymentOption = <div className="mastercard">
            <div>
            <Alert  variant="info"> To Pay your bill ( KES 669.50) via Your Visa or MasterCard. Enter Your Card Details Below then click 'Submit' </Alert>
            <Alert variant="warning"> Please Note : Use of stolen cards is an offence punishable by law .</Alert>
            </div>
            <div><img alt="crediCartPlaceHolder" src={crediCartPlaceHolder}/></div>
            <div id="creditcardinfo">
                <Form.Control size="lg" type="text" placeholder="Card Number" id="cardNumber" onChange={this.handleCardForm}/>
                <br />
                <Form.Control size="lg" type="text" placeholder="CVV" id="cardCVV" onChange={this.handleCardForm}/>
                <br />
                <div id="creditcardinfodate">
                    <div>
                    <Form.Row>
                    <div>
                    <Form.Group controlId="cardExpiryMonth" onChange={this.handleCardForm}>
                    <Form.Label>Month</Form.Label>
                    <Form.Control as="select">
                        <option>Choose...</option>
                        <option>...</option>
                        <option>...</option>
                        <option>...</option>
                        <option>...</option>
                        <option>...</option>
                        <option>...</option>
                    </Form.Control>

                    </Form.Group>
                    </div>
                    <div>
                    <Form.Group controlId="cardExpiryYear" onChange={this.handleCardForm}>
                    <Form.Label>Year</Form.Label>
                    <Form.Control as="select">
                        <option>Choose...</option>
                        <option>...</option>
                        <option>...</option>
                        <option>...</option>
                        <option>...</option>
                        <option>...</option>
                        <option>...</option>
                    </Form.Control>
                    </Form.Group>
                    </div>
                    
                    </Form.Row>                                
                    </div>
                </div>
            </div>
            <div>
            <LoaderButton variant="primary" type="submit" id="mastercard" disabled={!this.validateForm()} isLoading={this.state.isLoading} onClick={this.handleSubmit}>
                proceed
            </LoaderButton>
            </div>
            </div>
        
        let paypallPaymentOption = <Alert  variant="info">  To Pay your bill ( KES 669.50) via Your Visa or MasterCard. Enter Your Card Details Below then click 'Submit'</Alert>

        

        return(
            <div className="payments-page" >
                <div>
                <div className="payment-options">
                <div className="p-option">
                <img alt="mpesa logo" src={mpesaLogo} /> 
                <Card  id="mpesa" >
                <Card.Title>Mpesa</Card.Title>
                <Card.Link href="#" onClick={this.handleSelect}>Click select</Card.Link> 
                <div className="payment-instructions" style={{display: `${this.state.display}`}}>
                {mpesaPaymentOption}                         
                </div>
                </Card>

                </div>

                <div className="p-option">
                <img alt="mpesa logo" src={mastercard} />   
                <Card>
                <Card.Title>Visa/MasterCard</Card.Title>
                <Card.Link href="#" onClick={this.handleSelect}>Click select </Card.Link>
                <div className="payment-instructions" style={{display: `${this.state.display}`}}>
                {cardPaymentOption}
                </div> 
                </Card>

                </div>

                <div className="p-option">
                <img alt="mpesa logo" src={paypall} /> 
                <Card> 
                <Card.Title>Paypall </Card.Title>
                <Card.Link href="#" onClick={this.handleSelect}>Click select</Card.Link>
                <div className="payment-instructions" style={{display: `${this.state.display}`}}>
                {paypallPaymentOption}
                </div> 
                </Card>
                    
                
                </div>
                </div>
                </div>
                
            </div>
        )
    }
}

export default  withRouter(PaymentOptions);