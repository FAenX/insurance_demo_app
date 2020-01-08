import React from "react"
import {withRouter} from "react-router-dom";
import imgPlaceholder from "../assets/images/img_placeholder.png"


class HowItWorksStep extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
        
    }

    render(){
        const how = "Name Insurance inc makes use of cutting-edge technology to provide our" 
                    +"customers with the best deal. Our web services are managed and run"
                    +"by leading and experienced web developers, meaning that our customers"
                    +"always have the best experience, and that the quotes are always competitive."
                    +"The quotes we provide are pulled directly from our providers, which means" 
                    +"that we always provide you with the best deal."

        return(
            <div className="step">
                    <div className="step-image"><img alt="" src={imgPlaceholder}/></div>
                    <div className="step-text-wrapper">
                        <div className="step-header">Select motor insurance cover</div>
                        <div className="step-text">
                       {how}
                        </div>
                    </div>
            </div>
              
        )
    }
}

class HowItWorks extends React.Component{

    handleGetStartedButton=()=>{
        this.props.history.push("/signup")
    }

    render(){
        return(
            <div className="how-it-works-wrapper">
                <div className="how-it-works-sub-header">
                    <div className="how-it-works-sub-header-child">
                        <h1>How does it work?</h1>
                    </div>
                </div>
                <div className="how-it-works">                
               <HowItWorksStep />
                </div>
                
               
                </div>
                
           
        )
    }
}

export default withRouter(HowItWorks);