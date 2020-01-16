import React from "react";
import {withRouter} from "react-router-dom"
import Home from "./Home"
import HowItWorks from './HowItWorks'
import OurPatners from "./OurPatners"
import WhyUs from "./WhyUs"
import GetStartedButton from "../utils/GetStartedButton"
import FreeQuotationButton from "../utils/FreeQuotationButton"




class FrontPage extends React.Component {
    constructor(props){
        super(props)
        this.state={
            providers: ""

        }
    }

    componentDidMount = ()=>{
    }    

    render(){

        return(
            <div className="front-page">
                <GetStartedButton />
                <FreeQuotationButton />
                <div className="cover-page">
                    <Home/>
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