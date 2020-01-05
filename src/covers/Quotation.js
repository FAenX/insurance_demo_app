import React from 'react';
import LoaderButton from "../helpers/LoaderButton";
import {withRouter} from "react-router-dom";
import {Button, Paper, ListItem} from "@material-ui/core"

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
                            <Paper elevation={4} className="quotation">
                                <p>Quotation</p>
                                <p className=""> Quote ID: </p>                            
                                <ListItem>Email: <b>{vehicle.email} </b></ListItem>
                                <ListItem>REG Number:  <b>{vehicle.regNo}</b> </ListItem>
                                <ListItem>Vehicle value:  <b>{vehicle.vehicleValue}</b> </ListItem>
                                <ListItem>Vehicle Capacity:  <b>{vehicle.tonnes}</b> </ListItem>
                                <ListItem>Premium KSH: <b>{premium}</b></ListItem>
                                <ListItem>Cover: <b>{vehicle.cover}</b></ListItem>
                            
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