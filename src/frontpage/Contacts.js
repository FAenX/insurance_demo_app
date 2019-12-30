import React from "react"
import {withRouter} from "react-router-dom"

class Contacts extends React.Component {
    render(){
        return(
            <div className="contacts-wrapper">
                <div className="contacts-header">
                
                </div>
               
                <div className="contacts-child">
                    <h3>Heading</h3>
                    <p>contact</p>
                    <p>contact</p>
                    <p>contact</p>
                    <p>contact</p>
                </div>
                <div className="contacts-child">
                    <h3>Heading</h3>
                    <p>contact</p>
                    <p>contact</p>
                    <p>contact</p>
                    <p>contact</p>
                </div>
                <div className="contacts-child">
                    <h3>Heading</h3>
                    <p>contact</p>
                    <p>contact</p>
                    <p>contact</p>
                    <p>contact</p>
                </div>

            </div>
        )
    }
}

export default withRouter(Contacts)
