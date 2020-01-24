import React from 'react';
import {withRouter} from "react-router-dom";
import {Paper} from "@material-ui/core"
import OptionalBenefits from "./OptionalBenefits"
import Prodiver from "./Provider"
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
        let vehicle = JSON.parse(sessionStorage.getItem("vehicle"))
        let response = JSON.parse(sessionStorage.getItem("response"))
        let chosenProduct = JSON.parse(sessionStorage.getItem("chosen_product"))
        if (chosenProduct==null&&vehicle==null){
            chosenProduct={name: "no product chosen", alias: "no product chosen"}
            vehicle={name: "no product chosen", alias: "no product chosen"}
        }
        const user = "user"
        return(
            <div className="quotation-page-wrapper">                
                <div className="quotation-body-wrapper">                   
                        <div className="product-title">
                        chosenProduct.name}
                        </div>                        
                            <div className="quotation-wrapper">
                                <div elevation={3}className="quotation" >                            
                                    <Paper variant="outlined" id="quotation-header">
                                        Hi {user}, we have found 1 plan for your {vehicle.vehicleMake} {vehicle.vehicleModel}
                                    </Paper>
                                    <div id="quotation-content">
                                        <Vehicle 
                                            vehicle={vehicle}
                                        />                                    
                                        <OptionalBenefits 
                                            premium={response.premium}
                                        />
                                        <Prodiver 
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