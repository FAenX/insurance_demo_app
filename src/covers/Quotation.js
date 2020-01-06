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
                                <div elevation={3}className="quotation" >
                                    <div id="quotation-top"></div>                              
                                    <Paper variant="outlined" id="quotation-header">
                                        Hi {user}, we have found 1 plan for your {vehicle.vehicleMake} {vehicle.vehicleModel}
                                    </Paper>
                                    <div id="quotation-content">
                                        <Paper variant="outlined" className="q-content" id="vehicle-details">
                                        <ListItem button>Vehicle Use:<b> {vehicle.vehicleUse}</b></ListItem>                                        
                                        <hr className="divider"></hr>
                                        <ListItem button>Vehicel Make: <b>{vehicle.vehicleMake}</b></ListItem>
                                        <hr className="divider"></hr>
                                        <ListItem button>Vehicel Model: <b>{vehicle.vehicleModel}</b></ListItem>
                                        <hr className="divider"></hr>                                        
                                        <ListItem button>REG Number:  <b>{vehicle.regNo}</b> </ListItem>
                                        <hr className="divider"></hr>
                                        <ListItem button>Vehicle value(KSH):  <b>{vehicle.vehicleValue}</b> </ListItem>
                                        <hr className="divider"></hr>
                                        <ListItem button>Vehicle Capacity:  <b>{vehicle.tonnes}</b> </ListItem>
                                        </Paper>
                                        <Paper className="q-content" variant="outlined" id="optional-benefits">
                                            <div className="q-content-sub" variant="outlined">
                                                <p>Optional Benefits </p>
                                                <p>(Any optional benefit selected means additional premium)</p>
                                            </div>
                                            <hr className="divider"></hr>  
                                            <div></div>
                                        </Paper>
                                        <Paper variant="outlined" className="q-content" id="provider-details">
                                            <div className="q-content-sub" variant="outlined">(+15yrs Special) Jubilee Motor Private Comprehensive Cover</div>
                                            <hr className="divider"></hr>
                                            <img alt="" src="" />
                                            
                                        </Paper>
                                        <Paper variant="outlined" className="q-content" id="insurance-details">   
                                        <ListItem button>Cover: <b>{chosenProduct.name}</b></ListItem> 
                                        <hr className="divider"></hr> 
                                        <ListItem button>Cover to start from: <b>{vehicle.coverStartDate}</b></ListItem>
                                        <hr className="divider"></hr>
                                        <ListItem button>Premium KSH: <b>{premium}</b></ListItem>
                                        <hr className="divider"></hr>
                                        
                                        </Paper> 
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