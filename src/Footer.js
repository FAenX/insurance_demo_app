import React from "react"

class Footer extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }



    render(){
        return(
            <div className="footer-wrapper">
               Name Insurance Brokers (EA) Ltd.  ©  {new Date().getFullYear()} All rights reserved.                |  
               Powered by <a href="http://">TechRafiki Solutions</a>
            </div>
        )
    }
}

export default Footer;