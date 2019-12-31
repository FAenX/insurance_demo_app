import React from "react"
import {withRouter} from "react-router-dom"
import { filter } from "minimatch"



class Product extends React.Component {

    constructor(props){
        super(props)
        this.state={}
    }

    componentWillMount=()=>{
        this.chosenProductAlias = JSON.parse(sessionStorage.getItem("chosen_product"))
        this.filteredProducts = JSON.parse(sessionStorage.getItem("filtered_products"))
        this.chosenProduct = this.filter(this.filteredProducts, this.chosenProductAlias)
    }

    filter =(products, alias)=>{
        let chosenProduct;
        for (let i=0; i < products.length; i++){
            if (products[i].alias === alias){
                chosenProduct = products[i]
            }                
        }
        return chosenProduct
    }

    render(){
        return (
            <div className="product-wrapper">
                    {this.chosenProduct.name}
            </div>
        )
    }
}

export default withRouter(Product);