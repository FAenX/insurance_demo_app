import React from "react"
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

export default SocialMedia