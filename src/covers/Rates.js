import React from 'react';
import {withRouter} from "react-router-dom"
import QuoteForm from "./QuoteForm"
import {Paper} from "@material-ui/core"
import Filter9PlusIcon from '@material-ui/icons/Filter9Plus';
import LoaderButton from "../LoaderButton";
import SnackBar from "../SnackBar"

class Rates extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            premium: 0,
            responseData: {},
            status: "error",
            loading: false,
            showSnackBar: false,
            vehicle: {}
        }
        this.requestQuotation = this.requestQuotation.bind(this)
    }
    
    componentWillMount =()=>{
        this.chosenProduct = JSON.parse(sessionStorage.getItem("chosen_product"))       
        if (this.chosenProduct==null){
            this.chosenProduct = {name: "Select cover"}
        }            
               
    } 
    

    async requestQuotation (){
        this.setState({
            loading: true,
            showSnackBar: false,
        })

        const url = "api/v1/quotes/quote/";
        const request =fetch(url, {
            method: 'POST',  
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
              },
            body: JSON.stringify(this.state.vehicle),
        }).then(
            (res)=> res.json()
        ).catch(
            (err) => err
        );
        
        
        const response = await request
        this.setState({
            loading: false,
            responseData: response
        })
        
        if(response.status==="success"){
            this.setState({
                status: "success",
                message: "Request Successfull. Redirecting....",
                showSnackBar: true
            })

            
        }else if(response.status==="error"){
            this.setState({
                status: "error",
                message: response.error,
                showSnackBar: true
            })
        }
    }

    vehicleChangeListener=(vehicle)=>{
        this.setState({
            vehicle,
        })
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
                    
                    <Paper elevation={5} className="aplication-instructions-title">
                        
                        <p>Get insured in just five simple steps:</p>
                    </Paper>
                    <Paper elevation={5} className="aplication-instructions-text">
                        <ol>
                            <li> Step 1</li>Fill out the form below and click <b>Get quote</b> to receive a quotation.
                            <li> Step 2</li>After receiving your quotation on the screen. Click on <b>Accept</b> to proceed.
                            <li> Step 3</li>Select your preferred payment method.
                            <li> Step 4</li>Fill out your payment information and click <b>Proceed</b> to process your payment.
                            <li>And finally</li> Download your insurance cover. Congratulations you’re insured!
                        </ol>
                    </Paper>
                    </div>
                </div>
                <div className="rates-form-wrapper">
                    <div className="rates-title-wrapper">
                        <div className="rates-title">
                        Insuring your car couldn't be simpler.
                        </div>
                    </div>
                    <div className="rates-form">
                        <Paper elevation={5} className="quote-form-header">
                            <div>Request quotation</div>
                            <div className="quote-form-nav">
                            {this.chosenProduct.name}
                            <Filter9PlusIcon style={{ fontSize: 40, color:"#f60" }}/>
                            </div>
                        </Paper>
                        <QuoteForm 
                            chosenProduct={this.chosenProduct} 
                            vehicleChangeListener={this.vehicleChangeListener}
                        />
                        
                        <div className="rates-submit-button-wrapper"> 
                        
                        <SnackBar 
                            status={this.state.status} 
                            message={this.state.message} 
                            show={this.state.showSnackBar}
                        />

                        <LoaderButton 
                            status={this.state.status}
                            loading={this.state.loading} 
                            handleButtonClick={this.requestQuotation}                            
                        >
                            Request
                        </LoaderButton>
                       </div> 
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Rates);