import React from "react"
import {withRouter} from "react-router-dom"
import {Button} from "@material-ui/core"
import Rates from "./Rates"

class Product extends React.Component {

    constructor(props){
        super(props)
        this.state={}
    }

    componentWillMount=()=>{
       
        this.chosenProduct = JSON.parse(sessionStorage.getItem("chosen_product"))
       
        if (this.chosenProduct==null){
            this.chosenProduct = {name: "Session ended. Please refresh", description: "Session ended. Please refresh"}
        }            
               
    } 


    render(){
        console.log(this.chosenProduct)
        return (
            <div className="product-wrapper">
                <div className="coversub-cover">                
                <div >                    
                    <div className="coversub-header-text">
                        <div className="main-body-header-text">
                            <h1>{this.chosenProduct.name}</h1>
                            <h2>
                                our moto
                            </h2>
                        </div>                        
                        <div className="coversub-button"><Button variant="contained">Get started</Button></div>
                    </div>
                    
                    </div>            
                </div>
                <div className="product-body-wrapper">
                    <div className="product-text-wrapper">
                        <div className="product-title">
                            {this.chosenProduct.name}
                        </div>
                        <div className="product-description-wrapper">
                            <div className="product-description">
                                 {this.chosenProduct.description} 
                            </div>
                        </div>
                    </div>
                    <div className="rates-wrapper">
                        <Rates chosenProduct={this.chosenProduct}/>
                    </div>
                </div>
                   
            </div>
        )
    }
}

export default withRouter(Product);