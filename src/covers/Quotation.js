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
        let vehicle = JSON.parse(sessionStorage.getItem("vehicle"))
        let premium = JSON.parse(sessionStorage.getItem("premium"))
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
                                        <Prodivers chosenProduct={chosenProduct} premium={premium}/> 
                                    </div>                                                
                                </div>
                            </div>                     
                </div>
            </div>
        )
    }
}

export default withRouter(Quotation);