import React from "react";
import {withRouter} from "react-router-dom"
import "./Claim.scss"



class Claim extends React.Component {

    render(){
        return(
            <div className="claims-wrapper">
                <div className="claims-body-wrapper">
                    <div className="headline">
                        Make a claim
                    </div>          
                </div>
            </div>      
        )
    }
}

export default withRouter(Claim);