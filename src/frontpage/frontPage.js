import React from "react";
import {withRouter} from "react-router-dom"
import { Button} from "react-bootstrap"
import Home from "./Home"
import HowItWorks from './HowItWorks'
import OurPatners from "./OurPatners"
import WhyUs from "./WhyUs"
import Contacts from "./Contacts"
import SocialMedia from "./SocialMedia"
import FooterMenu from "./FooterMenu"

class FrontPage extends React.Component {
    constructor(props){
        super(props)
        this.state={
            providers: ""

        }
    }

    componentDidMount = ()=>{
      

    }

    handleSubmit =(event)=>{
        event.preventDefault()
        this.props.history.push('/covers')
    }

    handleClickedSub = (event) =>{
        event.preventDefault()
        this.props.history.push('/cover')
    }

    

    render(){
       

        return(
            <div className="front-page">
                <div className="cover-page">
                    <Home/>
                </div>
                <div>
                    <HowItWorks/>
                </div>
                <div className="get-started-button"><Button variant="contained" onClick={this.handleGetStartedButton}>Get started</Button></div>
                <div>
                    <WhyUs />
                </div> 
                <div>
                    <OurPatners/>
                </div> 
                <div>
                    <Contacts/>
                </div>
                <div>
                    <FooterMenu/>
                </div> 
                <div>
                    <SocialMedia/>
                </div> 
            </div>
        )
    }
}
export default withRouter (FrontPage)