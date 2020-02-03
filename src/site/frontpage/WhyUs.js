import React from "react"
import {withRouter} from "react-router-dom"
import imgPlaceholder from "../../assets/images/img_placeholder.png"
import {Paper} from "@material-ui/core"

class WhyUsChild extends React.Component {

    render(){
        const how = "Name Insurance inc makes use of cutting-edge technology to provide our" 
                    +"customers with the best deal. Our web services are managed and run"
                    +"by leading and experienced web developers, meaning that our customers"
                    +"always have the best experience, and that the quotes are always competitive."
                   

        const how1 = "Once you buy the right policy after you’ve done the compare insurance "
                    +"and compare policy drill to your satisfaction, the process of delivering "
                    +"your policy documents should be as effortless as making instant noodles. "
                   
        
        const how3 = "Spelled your name wrong on the policy? Not sure how to change it after you buy policy?"
                    +"Have no clue how claims work? Don't worry, we have solutions for it all - it's free and doesn't involve paperwork! Our team is full" 
                    +"of superheroes - saving the day, one phone call at a time. "


        return(
                <div id="whoweare" className="why-us-text">
                    <Paper variant="outlined" className="why-us-child">
                        <div className="svg"><img alt="" src={imgPlaceholder}/></div>
                        <div className="step-header">Tailor Made Quotes</div>
                        <div className="step-text">{how}</div>
                    </Paper>
                    <Paper variant="outlined" className="why-us-child">
                        <div className="svg"><img alt="" src={imgPlaceholder}/></div>
                        <div className="step-header">Immediate Delivery</div>
                        <div className="step-text">{how1}</div>
                    </Paper>
                    <Paper variant="outlined" className="why-us-child">
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
                <div className="why-us-header sliding-effect">
                WE ARE THE MOST TRUSTED INSURANCE MARKET PLACE ONLINE
                </div>
                <WhyUsChild />
                </div>

            
        )
    }
}

export default withRouter(WhyUs)