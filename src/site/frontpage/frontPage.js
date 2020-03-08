import React from "react";
import {withRouter} from "react-router-dom"
import Home from "./Home"
import HowItWorks from './HowItWorks'
import OurPatners from "./OurPatners"
import WhyUs from "./WhyUs"
import "./FrontPage.scss"


const FrontPage =()=> {

    return(
        <div className="front-page">
            <div className="cover-page">
                <div className="cover-background">
                    <Home/>
                </div>
            </div>
                <HowItWorks/>  
            <div className="why-us-wrapper">
                <WhyUs />
            </div> 
            <div>
                <OurPatners/>
            </div> 
            
            
        </div>
    )

}
export default withRouter(FrontPage)