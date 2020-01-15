import React from 'react';
import {withRouter} from "react-router-dom"
import {Button, Paper} from "@material-ui/core"
import imgPlaceholder from "../assets/images/img_placeholder.png"

class Covers extends React.Component {
    constructor(props){
        super(props)
        this.state = {              
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
        let highlights; 
        let subCategories = JSON.parse(sessionStorage.getItem("sub_categories"))
        if (subCategories!==null && subCategories !== undefined && subCategories.length > 0){
            highlights = subCategories.map(i => {
            return<div className="highlight" key={i.alias}>
                    <div className="highlight-title">{i.name}</div> 
                        <div className="highlight-card">
                            <Paper variant="outlined" className="higlight-content">  
                                <div className="svg"><img alt="" src={imgPlaceholder}/> </div>
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
                            </Paper>
                        </div>
                </div>
                })
            

        } 

        return(
            <div className="page2">
                <div>{this.dataAlert}</div>
            <div className="page2-cover"> 
                <div className="page-headline-text"> 
                        <div className="headline-text">Name Insurance Brokers (EA) Ltd. Products</div>
                        <div>Insurance made easy</div>
                    <div className="get-started-button"><Button variant="outlined" color="secondary">Get started</Button></div>
                </div>                    
                        
            </div>
            <div className="highlights"> {highlights} </div>            
        </div>
        )
            
    }
}

export default withRouter(Covers);