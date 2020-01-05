import React from "react"
import {withRouter} from "react-router-dom"
import {Button} from "@material-ui/core"
import Rates from "./Rates"
import {filterByAlias} from "../helpers/js/dataManipulation"


class Product extends React.Component {
    constructor(props){
        super(props)
        this.state={
            chosenProduct: null,
            productAlias: "privatethirdpartyonly",
        }
    }

    UNSAFE_componentWillMount=()=>{       
        this.chosenProduct = JSON.parse(sessionStorage.getItem("chosen_product")) 
        if (this.chosenProduct == null){
            this.products = JSON.parse(sessionStorage.getItem("products"))  
            this.chosenProduct = filterByAlias(this.products, this.state.productAlias)
            this.setState({
                chosenProduct: this.chosenProduct,
            })
        } else {     
            this.setState({
                chosenProduct: this.chosenProduct,
            }) 
        }              
    } 

    productChangeListener=(product)=>{
        this.setState({
            chosenProduct: product,
        })
    } 
    
    

    render(){
        

        return (
            <div className="product-wrapper">
                <div className="coversub-cover">                
                <div >                    
                    <div className="cover-header-text-wrapper">
                        <div className="cover-header-text">
                            <h1>{this.state.chosenProduct.name}</h1>
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
                        {this.state.chosenProduct.name}
                        </div>
                        <div className="product-description-wrapper">
                            <div className="product-description">
                                 {this.state.chosenProduct.description}
                            </div>
                        </div>
                    </div>
                    <div className="rates-wrapper">
                        <Rates 
                            productChangeListener={this.productChangeListener} 
                            chosenProduct={this.state.chosenProduct}
                        />
                    </div>
                </div>
               
            </div>
        )
    }
}

export default withRouter(Product);