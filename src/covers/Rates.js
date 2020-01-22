import React from 'react';
import {withRouter} from "react-router-dom"
import QuoteForm from "./QuoteForm"
import {Paper, Button} from "@material-ui/core"
import Filter9PlusIcon from '@material-ui/icons/Filter9Plus';
import LoaderButton from "../helpers/LoaderButton";
import SnackBar from "../components/SnackBar"
import SelectDialog from "../helpers/selectDialog"

class Rates extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            productAlias: "privatethirdpartyonly",
            chosenProduct: null,
            premium: 0,
            responseData: {},
            status: "error",
            loading: false,
            showSnackBar: false,
            showChooseDialog: false,
            vehicle: {}
        }
        this.requestQuotation = this.requestQuotation.bind(this)
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
                showSnackBar: true,
            })
            sessionStorage.setItem("premium", JSON.stringify(response.data))
            sessionStorage.setItem("vehicle", JSON.stringify(this.state.vehicle))
            setTimeout(()=>{this.props.history.push("/quotation")}, 3000)
            
        }else if(response.status==="error"){
            this.setState({
                status: "error",
                message: response.error,
                showSnackBar: true
            })
        }
    }

    
    validateForm=()=>{
        return this.state.vehicle.vehicleValue 
        && this.state.vehicle.regNo 
        && this.state.vehicle.email
        && this.state.vehicle.cover
        && this.state.vehicle.vehicleUse
        && this.state.vehicle.vehicleMake
        && this.state.vehicle.vehicleModel
        && this.state.vehicle.yearOfManufacture
        //&& this.state.vehicle.coverStartDate
    }   

   
    render(){        

        return(
            <div className="rates">
                <SelectDialog 
                    showChooseDialog={this.state.showChooseDialog}
                    closeChooseDialog={this.closeChooseDialog}  
                    productChangeListener={this.productChangeListener}
                />
                
                <div className="rates-title-wrapper"> 
                    <div className="rates-title"> 
                        <p>Your policy could be in your email in 5 minutes.</p>                    
                    </div> 
                </div>

                
                <div className="rates-form-wrapper">
                    <div className="rates-form">
                        <Paper elevation={5} className="quote-form-header">
                            <div>Request quotation</div>
                            <div className="quote-form-nav">
                            {this.state.chosenProduct.name}
                            <Filter9PlusIcon 
                                style={{ fontSize: 40, color:"#f60" }}
                                onClick={this.openChooseDialog}
                            />
                            </div>
                        </Paper>
                        <QuoteForm 
                            chosenProduct={this.chosenProduct} 
                            vehicleChangeListener={this.vehicleChangeListener}
                            productChangeListener={this.productChangeListener}
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
                            disabled={!this.validateForm()}                           
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