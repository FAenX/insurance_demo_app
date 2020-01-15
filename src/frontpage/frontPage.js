import React from "react";
import {withRouter} from "react-router-dom"
import Home from "./Home"
import HowItWorks from './HowItWorks'
import OurPatners from "./OurPatners"
import WhyUs from "./WhyUs"
import Contacts from "./Contacts"



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
                <div>
                    <Contacts/>
                </div>
                
            </div>
        )
    }
}
export default withRouter(FrontPage)