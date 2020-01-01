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

    requestQuotation =(data)=>{

        const url = "api/v1/quotes/quote/";
        const response = fetch(url, {
            method: 'POST',  
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
              },
            body: JSON.stringify(data),

        }).then(
            (res)=> res
        ).catch(
            (err) => err
        );

        response.then((res)=>{
            res.json().then((res) =>{
            
            if (res.status === "success"){
                this.setState({
                    premium: res.data
                })
                const data = this.state
                this.props.handleRequest(data)
                setTimeout(() => this.handleRedirectOnResponse(), 1000)

            } else if (res.status === "error"){
                this.setState({
                    premium: res.error
                })
                this.setState({isLoading:false})
            }else {
                console.log(res)
                this.setState({isLoading:false})
            }
        }).catch(err=>{
            this.setState({
                premium: res.status,
            })
            this.setState({isLoading:false})
        })
        }).catch((err)=>{
            console.log(`err: ${err}`)
            this.setState({isLoading:false})
        });

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
                                Insuring your car couldn't be simpler.</h2>
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