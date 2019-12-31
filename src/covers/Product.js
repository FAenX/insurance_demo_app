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
        this.chosenProductAlias = JSON.parse(sessionStorage.getItem("chosen_product_alias"))
        this.filteredProducts = JSON.parse(sessionStorage.getItem("filtered_products"))
        this.chosenProduct = JSON.parse(sessionStorage.getItem("chosen_product"))
        
    }

    


    render(){
        return (
            <div className="product-wrapper">
                <div className="coversub-cover">                
                <div >                    
                    <div className="coversub-header-text">
                        <div className="main-body-header-text">
                            <h1>{this.chosenProduct.name}</h1>
                            <h2>
                                GET A QUOTE IN 3 EASY STEPS
                                It will take you less than 2 minutes.</h2>
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
                        <Rates chosenProductAlias={this.chosenProductAlias}/>
                    </div>
                </div>
                   
            </div>
        )
    }
}

export default withRouter(Product);