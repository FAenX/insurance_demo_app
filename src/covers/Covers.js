import React from 'react';
import { Alert } from "react-bootstrap"
import Paper from "@material-ui/core/Paper"
import {withRouter} from "react-router-dom"
import Button from "@material-ui/core/Button"

class Covers extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            subCategories: "",
            isLoading:false,
            chosenSub: null
           
        }
    }
    
    componentDidMount = () => {

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
    
    handleOnClickSub =(event)=>{
        let target; 
        if (event.target.id) {
            target = event.target.id
        }else{
            target = event.target.parentNode.id
        }   
        
        console.log(target)

        this.setState({
            chosenSub: target,
        })

        setTimeout(()=>{this.handleRedirect()},1000)
    }

    // handle redirect after response
    handleRedirect =()=>{  
        console.log(this.state)
        this.props.chosenProduct(this.state)        
        this.props.history.push('/cover')
        
    }
    render(){
       
        let dataAlert;            
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
                        <Button variant="outlined" id={i.alias} onClick={this.handleOnClickSub}>Learn more</Button>
                    </div> 
                        
                    
                </div> 
                </Paper>
            })
        }
        

        if (this.state.subCategories == null){
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