import React from "react"

class Footer extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(
            <div className="footer-wrapper">
               <p>Name Insurance Brokers (EA) Ltd.  ©  2018 All rights reserved.  |  Powered by TechRafiki Solutions</p>
            </div>
        )
    }
}

export default Footer;