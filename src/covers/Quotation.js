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
        return(
            <div className="quotation-page-wrapper">
                <div className="coversub-cover">                
                <div >                    
                    <div className="cover-header-text-wrapper">
                        <div className="cover-header-text">
                            <h1>{chosenProduct.name}</h1>
                            <h2>
                                our moto
                            </h2>
                        </div>                        
                        <div className="cover-button"><Button variant="contained">Get started</Button></div>
                    </div>                    
                    </div>            
                </div>
                <div className="product-body-wrapper">
                    <div className="product-text-wrapper">
                        <div className="product-title">
                        {chosenProduct.name}
                        </div>
                        <div className="product-description-wrapper">
                            <div className="quotation-wrapper">
                                <Paper elevation={4}className="quotation" >                                
                                    <div id="quotation-header">
                                        <div>
                                            <p>
                                                Quotation
                                            </p>
                                        </div>
                                            <p className=""> 
                                                Quote ID:
                                            </p>
                                        <div></div>                                       
                                        
                                    </div>
                                    <div id="quotation-content">
                                        <Divider />
                                        <ListItem button>Email: <b>{vehicle.email} </b></ListItem>
                                        <Divider />
                                        <ListItem button>REG Number:  <b>{vehicle.regNo}</b> </ListItem>
                                        <Divider />
                                        <ListItem button>Vehicle value:  <b>{vehicle.vehicleValue}</b> </ListItem>
                                        <Divider />
                                        <ListItem button>Vehicle Capacity:  <b>{vehicle.tonnes}</b> </ListItem>
                                        <Divider />
                                        <ListItem button>Premium KSH: <b>{premium}</b></ListItem>
                                        <Divider />
                                        <ListItem button>Cover: <b>{vehicle.cover}</b></ListItem>  
                                    </div>
                                                             
                                                                                            
                                </Paper>
                            <LoaderButton variant="primary" type="submit" isLoading={this.state.isLoading} onClick={this.handleSubmit}>
                            Accept
                            </LoaderButton>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
                           
                            






            
        )
    }
}

export default withRouter(Quotation);