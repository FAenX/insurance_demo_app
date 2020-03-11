import React from "react"
import SocialMedia from "./SocialMedia"
import imgPlaceholder from "../../assets/images/img_placeholder.png"
import "./Contacts.scss"

class Contacts extends React.Component {
    render(){
        return(
            <div className="contacts-wrapper">
                <div className="contacts-header">
                    <img alt="logo" src={imgPlaceholder} />
                </div>
                <div className="contacts">
                    <div className="section">
                    
                    <p>(020)555 555</p>
                    <p>(020)555 555</p>
                    </div>
                    <div className="section">
                    
                    <p>(020)555 555</p>
                    <p>(020)555 555</p>
                    </div>
                    
                   
                   
                    
                    
                </div>
                <SocialMedia/>
               
                    
              

            </div>
        )
    }
}

export default Contacts
