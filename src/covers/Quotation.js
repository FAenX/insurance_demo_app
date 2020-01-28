import React from 'react';
import {withRouter} from "react-router-dom";
import {Paper} from "@material-ui/core"
import OptionalBenefits from "./OptionalBenefits"
import Prodiver from "./Provider"
import Vehicle from "./Vehicle"
import FreeQuotationButton from "../components/FreeQuotationButton"
import GetStartedButton from "../components/GetStartedButton"
import {filterByAlias} from "../helpers/js/dataManipulation"
import ProvidersCarousel from "./components/ProvidersCarousel"

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
        let vehicle = JSON.parse(sessionStorage.getItem("vehicle"))
        let response = JSON.parse(sessionStorage.getItem("response"))
        let products = JSON.parse(sessionStorage.getItem("products"))[0].products
        let chosenProduct = filterByAlias(products, vehicle.cover)
        
        let user = JSON.parse(sessionStorage.getItem("user"))
        
        let getStartedButton;
        if (user==null ||
            user===undefined ||
            Object.keys(user).length < 1
            ){
                user = JSON.parse(sessionStorage.getItem("temp_user"))
                getStartedButton = <GetStartedButton />     

        }

        
        

        return(
            <div className="quotation-page-wrapper"> 
            <FreeQuotationButton />
                  {getStartedButton}
                <div className="quotation-body-wrapper">                   
                        <div className="product-title sliding-effect">
                            {chosenProduct.name}
                        </div>                        
                            <div className="quotation-wrapper">
                                <div className="quotation" >                            
                                    <Paper variant="outlined" id="quotation-header">
                                        Hi {user.last_name}, we have found 1 plan for your {vehicle.vehicleMake} {vehicle.vehicleModel}
                                    </Paper>
                                    <div id="quotation-content">
                                        <Vehicle 
                                            vehicle={vehicle}
                                        />                                    
                                        <OptionalBenefits 
                                            premium={response.premium}
                                        />
                                        
                                        <ProvidersCarousel 
                                            chosenProduct={chosenProduct} 
                                            premium={response.premium}
                                        />
                                        
                                        
                                    </div>                                                
                                </div>
                            </div>                     
                </div>
            </div>
        )
    }
}

export default withRouter(Quotation);