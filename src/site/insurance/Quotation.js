import React from 'react';
import {Paper} from "@material-ui/core"
import Vehicle from "./components/Vehicle"
import {filterByAlias} from "../../helpers/js/dataManipulation"
import "./Quotation.scss"
import Provider from "./components/Provider"

//should be dynamic
import Jubilee from "../../assets/images/jubilee.png"
import Apa from "../../assets/images/apa.png"
import Heritage from "../../assets/images/partners-heritage.png"

const jp = "(+15yrs Special) Jubilee Motor"
const ap = "(+15yrs Special) APA Motor"
const hp = "(+15yrs Special) Heritage"

const Quotation =props=> {
    
    const handleSubmit = () =>{
        this.setState({
            isLoading: true,
        })
        this.handleRedirect()
    }

    const handleRedirect = () => {
        setTimeout(()=>{props.history.push("/payment-options")}, 1000)
    }


    const vehicle = JSON.parse(sessionStorage.getItem("vehicle"))
    const response = JSON.parse(sessionStorage.getItem("response"))
    const products = JSON.parse(sessionStorage.getItem("products"))[0].products
    const chosenProduct = filterByAlias(products, vehicle.cover)
    
    let user = JSON.parse(sessionStorage.getItem("user"))

    if (user==null ||
        user===undefined ||
        Object.keys(user).length < 1
        ){
            user = JSON.parse(sessionStorage.getItem("temp_user"))
    }


    return(
        <div className="quotation-page-wrapper">                          
        <div className="product-title sliding-effect">
            {chosenProduct.name}
        </div>                        
            <div className="quotation-wrapper">
                    <Paper variant="outlined" id="quotation-header">
                        Hi {user.last_name}, we have found 1 plan for your {vehicle.vehicleMake} {vehicle.vehicleModel}
                    </Paper>
                <div className="quotation" >   
                    <Vehicle
                        vehicle={vehicle}
                    />                            
                    
                    <div id="quotation-content">      
                        
                        <Provider 
                            chosenProduct={chosenProduct} 
                            premium={response.data}
                            jp={jp}
                            image={Jubilee}
                        />
                        <Provider 
                            chosenProduct={chosenProduct} 
                            premium={response.data}
                            jp={ap}
                            image={Apa}
                        />
                        <Provider 
                            chosenProduct={chosenProduct} 
                            premium={response.data}
                            jp={hp}
                            image={Heritage}
                        />
                        
                        
                    </div>                                                
                </div>
            </div>                     
         
        </div>
    )
}


export default Quotation;