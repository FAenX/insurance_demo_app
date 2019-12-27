import React from 'react';
import { Alert } from "react-bootstrap"
import Paper from "@material-ui/core/Paper"
import {withRouter} from "react-router-dom"
import Button from "@material-ui/core/Button"
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import image1 from "../assets/images/image1.png"

class Covers extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            subCategories: "",
            isLoading:false,
            products:null,
            chosenProduct: null
           
        }
    }
    
    componentDidMount = () => {
        fetch("api/v1/products/", {
           method: "GET" 
        }).then((res)=>{
            if(res.status === 200){
                res.json().then((data)=>{
                    console.log(data[0])
                    this.setState({
                        products: data[0].products
                    });
                }).catch((error)=>{
                    console.log(error)
                    console.log(res)
                })
            } else {
                console.log(res)
            }
            console.log(res.status)
        }).catch((err)=>{
            console.log(err)
        })

        fetch("/api/v1/products/sub-categories/", {
            method: "GET",
            
        }).then(res=>{
            if(res.status === 200){
                res.json().then((data)=>{
                    console.log(data)
                    this.setState({
                        subCategories: data
                    });
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


    // handle submit
    onSubmitHandler = (event) => {
        event.preventDefault();
        console.log(event.target.name)
        console.log(event.target.value)
        

        this.setState({
            isLoading: true,
            chosenProduct: {
                chosenProductName: event.target.name,
                chosenProductAlias: event.target.value
            }
        })
        console.log(this.state.chosenProduct)
        setTimeout(()=>{this.props.chosenProduct(this.state.chosenProduct)}, 1000)

       
        setTimeout(()=>{this.handleRedirect()}, 1000)


    }

    // handle redirect after response
    handleRedirect =()=>{
        this.props.history.push('/')
        
    }

    render(){
       
        let dataAlert;
        let covers; 
        let mainDescription;
        let bullets;
        let bull;
        let coverScope;
        let highlights;
        

        if (this.state.subCategories) {
            highlights = this.state.subCategories.map(i => {
            return<Paper variant="outlined" className="highlight-card">
            
                    <div  className="highlight">                           
                
                    <div className="highlight-title">{i.name}</div>
                    <div className="highlight-text">
                        Build a bench of trusted, skilled and certified IT 
                        techs so you can become a full-service partner to more 
                        of your customers.
                    </div> 
                    <div className="highlight-button" >
                        <Button variant="outlined" id={i.alias} onClick={this.handleRedirect}>Learn more</Button>
                    </div> 
                        
                    
                </div> 
                </Paper>
            })
        }
        
        const description = (text)=>{
            const splitText = text.split(':')
            mainDescription = splitText[0]
            bullets = splitText[1]
            
            if (bullets !== undefined){
                bull = bullets.split('.').filter((value, index, array)=>{
                    return value !== ""
                })
            } else {
                bull = []
            }
            console.log(bull)

        }


        if (this.state.products == null){
            dataAlert = <Alert variant="warning">Sorry no insurance products found</Alert>
        } else {
            
        }

        return(
            <div className="page2">
                <div>{dataAlert}</div>
            <div className="page2-cover">
                
                    <div >
                        
                        <div className="page2-headline-text">
                            <div >
                                <h1>Name Insurance Brokers (EA) Ltd. Products</h1>
                                <p>Insurance made easy</p>
                                
                            </div>
                            
                            <div><Button variant="contained" color="secondary">Get started</Button></div>
                        </div>
                        
                    </div>            
            </div>
            <div className="highlights"> {highlights} </div>
            
        </div>
        )
            
    }
}

export default withRouter(Covers);