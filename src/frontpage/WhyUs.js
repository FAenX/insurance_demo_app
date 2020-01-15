import React from "react"
import {withRouter} from "react-router-dom"
import imgPlaceholder from "../assets/images/img_placeholder.png"
import {Paper} from "@material-ui/core"

class WhyUsChild extends React.Component {

    render(){
        const how = "Name Insurance inc makes use of cutting-edge technology to provide our" 
                    +"customers with the best deal. Our web services are managed and run"
                    +"by leading and experienced web developers, meaning that our customers"
                    +"always have the best experience, and that the quotes are always competitive."
                    +"The quotes we provide are pulled directly from our providers, which means" 
                    +"that we always provide you with the best deal."

        const how1 = "Once you buy the right policy after you’ve done the compare insurance "
                    +"and compare policy drill to your satisfaction, the process of delivering "
                    +"your policy documents should be as effortless as making instant noodles. "
                    +"With no long forms to fill and quick online payment methods, we ensure that "
                    +"your policy is express-delivered to your inbox even before you refresh. "
                    +"It's that fast when you buy insurance policy online. You can get your sticker "
                    +"within 2 hours on condition that you are within the main Cities in Kenya and "
                    +"we receive your request by 4.00 P.M. otherwise, your policy will be delivered the following day."
        
        const how3 = "Spelled your name wrong on the policy? Not sure how to change it after you buy policy?"
                    +"Have no clue how claims work? Don't worry. When you buy an insurance policy from Pacific," 
                    +"your problems are our problems. From changes in your policy to queries that you are too scared"
                    +"to ask, we have solutions for it all - it's free and doesn't involve paperwork! Our team is full" 
                    +"of superheroes - saving the day, one phone call at a time. There is a reason why most of our" 
                    +"customers believe we are the insurance policy compare go-to world. We’ve earned that trust :)"


        return(
                <div className="why-us-text">
                    <Paper className="why-us-child">
                        <div className="svg"><img alt="" src={imgPlaceholder}/></div>
                        <div className="step-header">Tailor Made Quotes</div>
                        <div className="step-text">{how}</div>
                    </Paper>
                    <Paper className="why-us-child">
                        <div className="svg"><img alt="" src={imgPlaceholder}/></div>
                        <div className="step-header">Immediate Delivery</div>
                        <div className="step-text">{how1}</div>
                    </Paper>
                    <Paper className="why-us-child">
                    <div className="svg"><img alt="" src={imgPlaceholder}/></div>
                        <div className="step-header">After-Sales Service</div>
                        <div className="step-text">{how3}</div>
                    </Paper>
                </div>
        )
    }
}


class WhyUs extends React.Component {
    
    render(){
        return(
            <div className="why-us">
                <div className="why-us-header">
                WE ARE THE MOST TRUSTED INSURANCE MARKET PLACE ONLINE
                </div>
                <WhyUsChild />
                </div>

            
        )
    }
}

export default withRouter(WhyUs)