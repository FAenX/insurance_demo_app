import React from "react"
import {withRouter} from "react-router-dom"


class SocialMedia extends React.Component {
    render(){
        return(
            <div className="social-media">                
                <div className="fa fa-facebook"/>
                <div className="fa fa-twitter"/>
            </div>
        )
    }
}

export default withRouter(SocialMedia)