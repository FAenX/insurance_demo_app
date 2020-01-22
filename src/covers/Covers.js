import React from 'react';
import {withRouter} from "react-router-dom"
import {Button, Paper} from "@material-ui/core"
import imgPlaceholder from "../assets/images/img_placeholder.png"
import GetStartedButton from "../components/GetStartedButton"
import FreeQuotationButton from "../components/FreeQuotationButton"

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
                <GetStartedButton />
                <FreeQuotationButton />
                <div>{this.dataAlert}</div>
                <div className="intro">
                    <div className="headline-text">
                        motor Insurance
                    </div>
                    <div className="sub-text">
                    This is insurance for a motor vehicle such as a car, 
                    which provides protection against loss in the event of an 
                    accident, theft, etc.
                    </div>
                </div>
                <div className="motor-insurance-highlights">
                    <div className="motor-insurance-highlights-img">
                        <img alt="" src={imgPlaceholder}></img>
                    </div>
                    <div className="headline-text">
                        What you will get
                    </div>
                    <div className="sub-text">
                    Our Motor insurance cover protects the insured against financial loss in the 
                    event that the motor vehicle is involved in an accident, burnt or stolen.
                    We offer 3 types of coverage: 
                    <ul>
                        <li>Third Party: Covers third party bodily injury and property damage arising out of a vehicle accident.</li>
                        <li>Third party Fire & Theft: Cover extends to cover theft, fire, third party bodily injury and property damage.</li>
                        <li>Comprehensive: Covers third party liability and property damage to the vehicle i.e. damage arising out of fire, theft and accidental damage to the vehicle.</li>
                    
                    </ul>                   
                    </div>

                </div>
                <Paper className="motor-insurance-benefits">
                    <div className="headline-text">
                        Benefits at a glance
                    </div>
                    <div className="motor-insurance-benefits-list">
                        <div className="motor-insurance-benefits-list-item">
                            <div className="number">1</div>
                            <div className="motor-insurance-benefits-text">Excellent claims settlement</div>
                        </div>
                        <div className="motor-insurance-benefits-list-item">
                            <div className="number">2</div>
                            <div className="motor-insurance-benefits-text">Political violence and terrorism benefit</div>
                        </div>
                        <div className="motor-insurance-benefits-list-item">
                            <div className="number">3</div>
                            <div className="motor-insurance-benefits-text">24hr towing service</div>
                        </div>
                        <div className="motor-insurance-benefits-list-item">
                            <div className="number">4</div>
                            <div className="motor-insurance-benefits-text">Accident and disability benefit</div>
                        </div>
                        <div className="motor-insurance-benefits-list-item">
                            <div className="number">5</div>
                            <div className="motor-insurance-benefits-text">Free motor valuation and inspection</div>
                        </div>
                    </div>
                    
                </Paper>
        </div>
        )
            
    }
}

export default withRouter(Covers);