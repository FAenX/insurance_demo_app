import React from 'react';
import {withRouter} from "react-router-dom"
import {Paper} from "@material-ui/core"
import imgPlaceholder from "../assets/images/img_placeholder.png"
import FreeQuotationButton from "../components/FreeQuotationButton"
import {List, ListItem, ListItemIcon} from "@material-ui/core"
import {CheckCircleOutlineRounded} from "@material-ui/icons"
import "./Covers.scss"

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

        return(
            <div className="motor-insurance">
                <FreeQuotationButton />
                <div>{this.dataAlert}</div>
                <div className="intro">
                    <div className="headline-text sliding-effect">
                        motor Insurance
                    </div>
                    <div className="sub-text sliding-effect8s">
                    This is insurance for a motor vehicle such as a car, 
                    which provides protection against loss in the event of an 
                    accident, theft, etc.
                    </div>
                </div>
                <div className="motor-insurance-highlights">
                    <div className="motor-insurance-highlights-img sliding-effect">
                        <img alt="" src={imgPlaceholder}></img>
                    </div>
                    <div className="headline-text sliding-effect">
                        What you will get
                    </div>
                    <div className="sub-text sliding-effect8s">
                    Our Motor insurance cover protects the insured against financial loss in the 
                    event that the motor vehicle is involved in an accident, burnt or stolen.
                    We offer 3 types of coverage: 
                    <List className="sliding-effect10s">
                        <ListItem>
                            <ListItemIcon>
                                <CheckCircleOutlineRounded />
                            </ListItemIcon>
                            Third Party: Covers third party bodily injury and property damage arising out of a vehicle accident.</ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CheckCircleOutlineRounded />
                            </ListItemIcon>
                            Third party Fire & Theft: Cover extends to cover theft, fire, third party bodily injury and property damage.</ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CheckCircleOutlineRounded />
                            </ListItemIcon>
                            Comprehensive: Covers third party liability and property damage to the vehicle i.e. damage arising out of fire, theft and accidental damage to the vehicle.</ListItem>
                    
                    </List>                   
                    </div>

                </div>
                <Paper className="motor-insurance-benefits">
                    <div className="headline-text sliding-effect">
                        Benefits at a glance
                    </div>
                    <List className="motor-insurance-benefits-list">
                        <ListItem button className="motor-insurance-benefits-list-item sliding-effect8s">
                            <ListItemIcon>
                                <CheckCircleOutlineRounded />
                            </ListItemIcon>
                            <div className="motor-insurance-benefits-text">Excellent claims settlement</div>
                        </ListItem>
                        <ListItem className="motor-insurance-benefits-list-item sliding-effect10s">
                        <ListItemIcon>
                                <CheckCircleOutlineRounded />
                            </ListItemIcon>
                            <div className="motor-insurance-benefits-text">Political violence and terrorism benefit</div>
                        </ListItem>
                        <ListItem className="motor-insurance-benefits-list-item sliding-effect10s">
                        <ListItemIcon>
                                <CheckCircleOutlineRounded />
                            </ListItemIcon>
                            <div className="motor-insurance-benefits-text">24hr towing service</div>
                        </ListItem>
                        <ListItem className="motor-insurance-benefits-list-item sliding-effect10s">
                        <ListItemIcon>
                                <CheckCircleOutlineRounded />
                            </ListItemIcon>
                            <div className="motor-insurance-benefits-text">Accident and disability benefit</div>
                        </ListItem>
                        <ListItem className="motor-insurance-benefits-list-item sliding-effect10s">
                        <ListItemIcon>
                                <CheckCircleOutlineRounded />
                            </ListItemIcon>
                            <div className="motor-insurance-benefits-text">Free motor valuation and inspection</div>
                        </ListItem>
                    </List>
                    
                </Paper>
        </div>
        )
            
    }
}

export default withRouter(Covers);