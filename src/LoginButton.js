import React from "react"
import {withRouter} from "react-router-dom"
import {Button} from "@material-ui/core"

class LoginButton extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    //redirect to signin
  redirectToSignin =()=>{
    this.props.history.push("/signin")
  }


    render(){
            return(
                <Button variant="outlined" onClick={this.redirectToSignin}>login</Button>
            )
        }
}


export default withRouter(LoginButton)