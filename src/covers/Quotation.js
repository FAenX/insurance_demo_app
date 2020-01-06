import React from 'react';
import LoaderButton from "../helpers/LoaderButton";
import {withRouter} from "react-router-dom";
import {Paper, ListItem} from "@material-ui/core"
import OptionalBenefits from "./OptionalBenefits"
import Prodivers from "./Provider"
import Vehicle from "./Vehicle"

class Quotation extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    

    handleSubmit = () =>{
        this.setState({
            isLoading: true,
        })
        this.handleRedirect()
    }

    handleRedirect = () => {
        setTimeout(()=>{this.props.history.push("/payment-options")}, 1000)
    }

    render(){
        const vehicle = JSON.parse(sessionStorage.getItem("vehicle"))
        const premium = JSON.parse(sessionStorage.getItem("premium"))
        const chosenProduct = JSON.parse(sessionStorage.getItem("chosen_product"))
        const user = "user"
        return(
            <div className="quotation-page-wrapper">                
                <div className="quotation-body-wrapper">                   
                        <div className="product-title">
                        {chosenProduct.name}
                        </div>                        
                            <div className="quotation-wrapper">
                                <div elevation={3}className="quotation" >
                                    <div id="quotation-top"></div>                              
                                    <Paper variant="outlined" id="quotation-header">
                                        Hi {user}, we have found 1 plan for your {vehicle.vehicleMake} {vehicle.vehicleModel}
                                    </Paper>
                                    <div id="quotation-content">
                                        <Vehicle vehicle={vehicle}/>                                    
                                        <OptionalBenefits premium={premium}/>
                                        <Prodivers /> 
                                    </div>                                                
                                </div>
                            <LoaderButton variant="primary" type="submit" isLoading={this.state.isLoading} onClick={this.handleSubmit}>
                            Accept
                            </LoaderButton>
                            </div>                     
                </div>
            </div>
        )
    }
}

export default withRouter(Quotation);