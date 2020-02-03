import React from "react"
import {withRouter} from "react-router-dom"
import SocialMedia from "../frontpage/SocialMedia"
import imgPlaceholder from "../../assets/images/img_placeholder.png"
import "./Contacts.scss"

class Contacts extends React.Component {
    render(){
        return(
            <div className="contacts-wrapper">
                <div className="contacts-header">
                    <img alt="logo" src={imgPlaceholder} />
                </div>
                <div className="contacts-child">
                    <h3>Heading</h3>
                    <p>contact</p>
                    <p>contact</p>
                    <p>contact</p>
                    <p>contact</p>
                </div>
                <div className="contacts-child">
                    <SocialMedia/>
                </div>
                

            </div>
        )
    }
}

export default withRouter(Contacts)
