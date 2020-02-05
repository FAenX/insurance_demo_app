import React from "react"
import {withRouter} from "react-router-dom"
import {WhatsApp, Facebook, Twitter} from "@material-ui/icons"


class SocialMedia extends React.Component {
    render(){
        return(
            <div className="social-media">                
                <WhatsApp />
                <Facebook />
                <Twitter />
            </div>
        )
    }
}

export default withRouter(SocialMedia)