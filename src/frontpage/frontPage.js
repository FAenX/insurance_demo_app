import React from "react";
import {withRouter} from "react-router-dom"
import Home from "./Home"
import HowItWorks from './HowItWorks'
import OurPatners from "./OurPatners"
import WhyUs from "./WhyUs"
import GetStartedButton from "../components/GetStartedButton"
import FreeQuotationButton from "../components/FreeQuotationButton"
import MotorInsuranceButton from "../components/MotorInsuranceButton"





class FrontPage extends React.Component {
    constructor(props){
        super(props)
        this.state={
            providers: ""

        }
    }

    handleClick=(event)=>{
        event.preventDefault()
        this.props.history.push("/covers")
    }
    render(){

        return(
            <div className="front-page">
                <MotorInsuranceButton />                
                <GetStartedButton />
                <FreeQuotationButton />
                <div className="cover-page">
                    <div className="cover-background">
                        <Home/>
                    </div>
                </div>
                
                    <HowItWorks/>               
                
                <div>
                    <WhyUs />
                </div> 
                <div>
                    <OurPatners/>
                </div> 
               
                
            </div>
        )
    }
}
export default withRouter(FrontPage)