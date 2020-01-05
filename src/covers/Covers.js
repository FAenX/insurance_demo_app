import React from 'react';
import { Alert } from "react-bootstrap"
import {withRouter} from "react-router-dom"
import Button from "@material-ui/core/Button"

class Covers extends React.Component {
    constructor(props){
        super(props)
        this.state = {
              
        }

        this.wait = this.wait.bind(this)
    }
    
    componentWillMount = () => {
        
        this.subCategories = JSON.parse(sessionStorage.getItem("sub_categories"))  
           
        if (this.subCategories==null){
            
            this.subCategories = {name: "Session ended. Please refresh", alias: "Session ended. Please refresh", description: "Session ended. Please refresh"}
            
            this.wait()
       
        }else{
            this.createHighlights()    
        }
       
         
    }
         
    
    // change
    async wait(){
        const timer = () => setTimeout(() => {
            const subCategories = JSON.parse(sessionStorage.getItem("sub_categories")) 
            console.log(subCategories)
            this.createHighlights()
            this.forceUpdate()
        }, 3000) 
        const res = timer()
        console.log(res)
    }
       

    
    

    createHighlights=()=>{
        console.log("creating highlights")
        try{
            const subCategories = JSON.parse(sessionStorage.getItem("sub_categories")) 
            this.highlights = subCategories.map(i => {
            return<div className="highlight" key={i.alias}>
                    <div className="highlight-title">{i.name}</div> 
                    <div className="highlight-card">  
                        <div className="highlight-text">
                            Build a bench of trusted, skilled and certified IT 
                            techs so you can become a full-service partner to more 
                            of your customers.
                            Build a bench of trusted, skilled and certified IT 
                            techs so you can become a full-service partner to more 
                            of your customers.
                        </div> 
                        <div className="highlight-button" >
                            <Button variant="outlined" id={i.alias} onClick={this.handleOnClickSub}>Learn more</Button>
                        </div>  
                    </div>
                    </div>
                })

        }catch{
            this.highlights = <Alert variant="info"> Refresh page </Alert>
        }
    }
    
   
    
    handleOnClickSub =(event)=>{
        let target; 
        if (event.target.id) {
            target = event.target.id
        }else{
            target = event.target.parentNode.id
        }  
        sessionStorage.setItem("chosen_sub", JSON.stringify(target))
        this.handleRedirect()
    }

    // handle redirect after response
    handleRedirect =()=>{          
        this.props.history.push('/cover')
        
    }
    render(){  

        return(
            <div className="page2">
                <div>{this.dataAlert}</div>
            <div className="page2-cover">                
                <div >                    
                    <div className="page-headline-text"> 
                            <h1>Name Insurance Brokers (EA) Ltd. Products</h1>
                            <p>Insurance made easy</p>
                        <div><Button variant="contained" color="secondary">Get started</Button></div>
                    </div>                    
                </div>            
            </div>
            <div className="highlights"> {this.highlights} </div>            
        </div>
        )
            
    }
}

export default withRouter(Covers);