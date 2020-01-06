import React from 'react';
import LoaderButton from "../helpers/LoaderButton";
import {withRouter} from "react-router-dom";
import {Button, Paper, ListItem, Divider} from "@material-ui/core"

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
                <div className="coversub-cover">                
                <div >                    
                    <div className="cover-header-text-wrapper">
                        <div className="cover-header-text">
                            <h1>{chosenProduct.name}</h1>
                            <h2>
                                Motor Insurance Cover
                            </h2>
                        </div>                        
                        <div className="cover-button"><Button variant="contained">Get started</Button></div>
                    </div>                    
                    </div>            
                </div>
                <div className="quotation-body-wrapper">
                   
                        <div className="product-title">
                        {chosenProduct.name}
                        </div>
                        
                            <div className="quotation-wrapper">
                                <Paper elevation={3}className="quotation" >
                                    <div id="quotation-top"></div>                              
                                    <div id="quotation-header">
                                        <h2> Hi {user}, we have found 1 plan for your {vehicle.vehicleMake} {vehicle.vehicleModel}</h2>
                                    </div>
                                    <div id="quotation-content">
                                        <div id="vehicle-details">
                                        <ListItem button>Vehicle Use:<b> {vehicle.vehicleUse}</b></ListItem>                                        
                                        <Divider />
                                        <ListItem button>Vehicel Make: <b>{vehicle.vehicleMake}</b></ListItem>
                                        <Divider />
                                        <ListItem button>Vehicel Model: <b>{vehicle.vehicleModel}</b></ListItem>
                                        <Divider />                                        
                                        <ListItem button>REG Number:  <b>{vehicle.regNo}</b> </ListItem>
                                        <Divider />
                                        <ListItem button>Vehicle value:  <b>{vehicle.vehicleValue}</b> </ListItem>
                                        <Divider />
                                        <ListItem button>Vehicle Capacity:  <b>{vehicle.tonnes}</b> </ListItem>
                                        </div>
                                        <div id="insurance-details">                                       
                                        
                                        <ListItem button>Cover: <b>{vehicle.cover}</b></ListItem> 
                                        <Divider /> 
                                        <ListItem button>Cover to start from: <b>{vehicle.coverStartDate}</b></ListItem>
                                        <Divider />
                                        <ListItem button>Premium KSH: <b>{premium}</b></ListItem>
                                        <Divider />
                                        
                                        </div> 
                                    </div>                                                
                                </Paper>
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