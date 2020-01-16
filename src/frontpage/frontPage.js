import React from "react";
import {withRouter} from "react-router-dom"
import Home from "./Home"
import HowItWorks from './HowItWorks'
import OurPatners from "./OurPatners"
import WhyUs from "./WhyUs"
import GetStartedButton from "../utils/GetStartedButton"
import FreeQuotationButton from "../utils/FreeQuotationButton"
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';




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
                <div className="next-arrow" >
                <ArrowForwardIcon color="primary" onClick={this.handleClick}/>
                </div> 
                
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