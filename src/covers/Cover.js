import React from 'react';
import {withRouter} from "react-router-dom"
import Button from "@material-ui/core/Button"
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class Cover extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            products:null,
            chosenProduct: null,           
        }
    }


    componentWillUnmount = ()=>{
        
    }

    componentWillMount =()=> {
       
            fetch("api/v1/products/", {
                method: "GET" 
             }).then((res)=>{
                 if(res.status === 200){
                     res.json().then((data)=>{                         
                         this.setState({
                             products: data[0].products
                         });
                         sessionStorage.setItem("products", JSON.stringify(data[0].products))
                         
                     }).catch((error)=>{
                         console.log(error)
                         console.log(res)
                     })
                 } else {
                     console.log(res)
                 }
                 
             }).catch((err)=>{
                 console.log(err)
             }) 

                     
             
    }

    componentDidMount=()=>{
            
    }

    // handle submit
    onSubmitHandler = (event) => {
        event.preventDefault();  
        console.log(event.target)      

        this.setState({
            isLoading: true,
            chosenProduct: {
                chosenProductAlias: event.target.id
            }
        })
        
        //setTimeout(()=>{this.props.chosenProduct(this.state.chosenProduct)}, 1000)

       
        this.handleRedirect()

    }

    handleRedirect=()=>{
        this.props.history.push("/product")
    }

    
    
    render(){

        let filteredProducts;
        let product1;
        let product2;
        let product3;
        let panel;
        
        let subCategories; 
        let sub;

        // const formatDescription = (text)=>{
        //     const splitText = text.split(':')
        //     mainDescription = splitText[0]
        //     bullets = splitText[1]
            
        //     if (bullets !== undefined){
        //         bulleted = bullets.split('.').filter((value, index, array)=>{
        //             return value !== ""
        //         })
        //     } else {
        //         bulleted = []
        //     }
            

        // }

        const filterProducts =(sub, products)=>{
            let filteredProducts=[];    
    
            try{
                for (let i=0; i < products.length; i++){
                    if (products[i].alias.startsWith(sub)){
                        
                        filteredProducts.push(products[i])
                        }
                }
                sessionStorage.setItem("filtered_products", JSON.stringify(filteredProducts))
    
            }catch{
                // i will write this later
            }
            return filteredProducts;
            
        }

        try {
            const products = JSON.parse(sessionStorage.getItem("products"))
            subCategories = JSON.parse(sessionStorage.getItem("sub_categories"))
            sub = JSON.parse(sessionStorage.getItem("chosen_sub"))
            filteredProducts = filterProducts(sub, products)

            product1 = filteredProducts[0]
            product2 = filteredProducts[1]
            product3 = filteredProducts[2]
  
            if (sub === "private"){
                subCategories = subCategories[0]
                
            
            }else if( sub === "commercial"){
                subCategories = subCategories[1]
               
            } else if (sub === "forhire"){
                subCategories = subCategories[2]
             
            } else {
                subCategories = {name: "empty", description: "empty"}
            }             
            
        } catch (error) {
            // i will write this later
        }

        try {
            panel =<div className="covers-expansion-panel">
                    <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography className="product-name">{product1.name}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        <Typography>
                           {product1.description}
                        </Typography>
                        </ExpansionPanelDetails>
                        <div className="coversub-button">
                            <Button variant="outlined" id={product1.alias} onClick={this.onSubmitHandler}>Learn more</Button>
                        </div>
                    </ExpansionPanel>

                    <ExpansionPanel>
                        <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        >
                        <Typography className="product-name">{product2.name}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        <Typography>
                        {product2.description}
                        </Typography>
                        </ExpansionPanelDetails>
                        <div className="coversub-button">
                            <Button variant="outlined">Learn more</Button>
                        </div>
                    </ExpansionPanel>

                    <ExpansionPanel >
                        <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        >
                        <Typography className="product-name">{product3.name}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        <Typography>
                        {product3.description}
                        </Typography>
                        
                        </ExpansionPanelDetails>
                        <div className="coversub-button">
                            <Button variant="outlined">Learn more</Button>
                        </div>
                    </ExpansionPanel>
                    </div> 
        }catch{

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