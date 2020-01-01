import React from 'react';
import {withRouter} from "react-router-dom"
import QuoteForm from "./QuoteForm"
import {Button} from "@material-ui/core"

class Rates extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            premium: "",
            isLoading:false
        }
    }
    
    componentWillMount =()=>{
        this.chosenProduct = JSON.parse(sessionStorage.getItem("chosen_product"))
    }

    componentDidMount = () => {        
        this.setState({
           
       })       
    }

    requestQuotation =(data)=>{
        const url = "api/v1/quotes/quote/";
        const response = fetch(url, {
            method: 'POST',  
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
              },
            body: JSON.stringify(data),
        }).then(
            (res)=> res
        ).catch(
            (err) => err
        );

        response.then((res)=>{
            res.json().then((res) =>{
            
            if (res.status === "success"){
                this.setState({
                    premium: res.data
                })
                const data = this.state
                this.props.handleRequest(data)
                setTimeout(() => this.handleRedirectOnResponse(), 1000)

            } else if (res.status === "error"){
                this.setState({
                    premium: res.error
                })
                this.setState({isLoading:false})
            }else {
                console.log(res)
                this.setState({isLoading:false})
            }
        }).catch(err=>{
            this.setState({
                premium: res.status,
            })
            this.setState({isLoading:false})
        })
        }).catch((err)=>{
            console.log(`err: ${err}`)
            this.setState({isLoading:false})
        });

    }

   
    render(){       

        return(
            <div className="rates">
                <div className="rates-title-wrapper"> 
                    <div className="rates-title"> 
                        <p>Your policy could be in your email in 5 minutes.</p>                        
                    </div> 
                </div>

                <div className="aplication-instructions-wrapper">
                <div className="aplication-instructions-text-wrapper">
                    
                    <div className="aplication-instructions-title">
                        
                        <p>Get insured in just five simple steps:</p>
                    </div>
                    <div className="aplication-instructions-text">
                        <ol>
                            <li> Step 1</li>Fill out the form below and click <b>Get quote</b> 
                                to receive a quote for {this.chosenProduct.name}.
                            <li> Step 2</li>After receiving your quote on the screen. 
                                Click on <b>Accept</b> to proceed.
                            <li> Step 3</li>Select your preferred payment method.
                            <li> Step 4</li>Fill out your payment information and click 
                                <b>Proceed</b> to process your payment.
                            <li>And finally</li> Download your insurance cover. 
                                Congratulations you’re insured!
                        </ol>
                    </div>
                    </div>
                </div>
                <div className="rates-form-wrapper">
                    <div className="rates-title-wrapper">
                        <div className="rates-title">
                        Request quotation for: {this.chosenProduct.name}
                        </div>
                    </div>
                    <div className="rates-form">
                        <div className="quote-form-header">Request quotation</div>
                        <QuoteForm chosenProduct={this.chosenProduct} />
                        <div className="rates-submit-button-wrapper"> 
                            <Button variant="contained">Request</Button>
                       </div> 
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Rates);