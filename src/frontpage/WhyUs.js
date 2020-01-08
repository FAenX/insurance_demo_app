import React from "react"
import {withRouter} from "react-router-dom"
import imgPlaceholder from "../assets/images/img_placeholder.png"

class WhyUsChild extends React.Component {

    render(){
        const how = "Name Insurance inc makes use of cutting-edge technology to provide our" 
            +"customers with the best deal. Our web services are managed and run"
            +"by leading and experienced web developers, meaning that our customers"
            +"always have the best experience, and that the quotes are always competitive."
            +"The quotes we provide are pulled directly from our providers, which means" 
            +"that we always provide you with the best deal."

        const how1 = "Name Insurance inc is free to use, and commission free. We make money "
            +"simply by charging our partners a fee when a customer chooses to "
            +"find out more about their products. This is important because, as a"
            +"business, we need to make money in order to continue to provide you,"
            +"our customers, with the best deals."

        return(
                <div className="flex-col why-us-text">
                    <div className="why-us-child">
                        <img alt="" src={imgPlaceholder}/>
                        <h1>Tailor Made Quotes</h1>
                        {how}
                    </div>
                    <div className="why-us-child">
                        <img alt="" src={imgPlaceholder}/>
                        <h1>The best rates</h1>
                        {how1}
                    </div>
                </div>
        )
    }
}


class WhyUs extends React.Component {
    
    render(){
        return(
            <div className="flex-col why-us">
                <div className="why-us-header">
                WE ARE THE MOST TRUSTED INSURANCE MARKET PLACE ONLINE
                </div>
                <WhyUsChild />
                </div>

            
        )
    }
}

export default withRouter(WhyUs)