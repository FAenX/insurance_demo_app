import React from 'react';
import {withRouter} from "react-router-dom"
import Button from "@material-ui/core/Button"
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Alert} from "react-bootstrap"

class Cover extends React.Component {
    constructor(props){
        super(props)
        this.state = {

            chosenProduct: null,           
        }
    }
        

    componentWillMount =()=> { 
        try{        
            this.subCategories = JSON.parse(sessionStorage.getItem("sub_categories"))
            this.sub = JSON.parse(sessionStorage.getItem("chosen_sub"))    
            this.products = JSON.parse(sessionStorage.getItem("products"))          
            if(this.products != null && this.products !== undefined && this.products.length > 0){                
                this.filteredProducts = this.filterProducts(this.products, this.sub)
                this.getProducts(this.filteredProducts)
            }else{               
                console.log("else")
            }         

        }catch{
            this.dataAlert = <Alert variant="warning">Something went wrong</Alert>
        }        

    } 

    

    //get specific products form the filtered lot
    getProducts=(filteredProducts)=>{
        this.product1 = filteredProducts[0];
        this.product2 = filteredProducts[1];
        this.product3 = filteredProducts[2];
        console.log(this.prodict1)
    }
    

    // handle submit
    onSubmitHandler = (event) => {
        event.preventDefault();  
              
        let chosenProductAlias; 
        if (event.target.id) {
            chosenProductAlias = event.target.id
        }else{
            chosenProductAlias = event.target.parentNode.id
        }    

        this.setState({
            isLoading: true,
            chosenProduct: {
                chosenProductAlias: chosenProductAlias
            }
        })
        

        sessionStorage.setItem("chosen_product_alias", JSON.stringify(chosenProductAlias))
        sessionStorage.setItem("chosen_product", JSON.stringify(this.getProduct(this.products, chosenProductAlias)))
        this.props.history.push("/product")      
        
    }  
    
    
    //return chosen product from filtered products
    getProduct =(products, alias)=>{
        let chosenProduct;
        for (let i=0; i < products.length; i++){
            if (products[i].alias === alias){
                chosenProduct = products[i]
            }                
        }
        return chosenProduct
    }
    
    //filter products to match chosen sub alias
    filterProducts =(products, sub)=>{
        let filteredProducts=[];    
        for (let i=0; i < products.length; i++){
            if (products[i].alias.startsWith(sub)){
                
                filteredProducts.push(products[i])
                }
        }
        return filteredProducts;            
    }
    
    render(){
        let subCategories;
        let panel; 
        
        

        if (this.sub === "private"){
            subCategories = this.subCategories[0]            
        }else if( this.sub === "commercial"){
            subCategories = this.subCategories[1]               
        } else if (this.sub === "forhire"){
            subCategories = this.subCategories[2]             
        } else {
            subCategories = {name: "empty", description: "empty"}
        }             

        try {
            panel =<div className="covers-expansion-panel">
                    <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography className="product-name">{this.product1.name}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        <Typography>
                           {this.product1.description}
                        </Typography>
                        </ExpansionPanelDetails>
                        <div className="coversub-button">
                            <Button variant="outlined" id={this.product1.alias} onClick={this.onSubmitHandler}>Learn more</Button>
                        </div>
                    </ExpansionPanel>

                    <ExpansionPanel>
                        <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        >
                        <Typography className="product-name">{this.product2.name}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        <Typography>
                        {this.product2.description}
                        </Typography>
                        </ExpansionPanelDetails>
                        <div className="coversub-button">
                            <Button variant="outlined" id={this.product2.alias} onClick={this.onSubmitHandler}>Learn more</Button>
                        </div>
                    </ExpansionPanel>

                    <ExpansionPanel >
                        <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        >
                        <Typography className="product-name">{this.product3.name}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        <Typography>
                        {this.product3.description}
                        </Typography>
                        
                        </ExpansionPanelDetails>
                        <div className="coversub-button">
                            <Button variant="outlined" id={this.product3.alias} onClick={this.onSubmitHandler}>Learn more</Button>
                        </div>
                    </ExpansionPanel>
                    </div> 
        }catch{
            //
        }

        return(
            <div className="cover-wrapper">
                <div className="coversub-cover">                
                <div >                    
                    <div className="coversub-header-text">
                        <div className="main-body-header-text">
                            <h1>{subCategories.name}</h1>
                            <h2>
                                GET A QUOTE IN 3 EASY STEPS
                                It will take you less than 2 minutes.</h2>
                        </div>                        
                        <div className="coversub-button"><Button variant="contained">Get started</Button></div>
                    </div>
                    
                    </div>            
                </div>
                <div className="main-body-wrapper">                    
                    {panel}
                    <div className="main-body-highlight-text">
                        {subCategories.name}
                    </div>
                    <div className="main-body-text">
                        {subCategories.description}                     
                    </div>
                </div>                
                <div></div>
            </div>
        )
    }

}

export default withRouter(Cover);