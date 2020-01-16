import React from "react"
import {withRouter} from "react-router-dom"
import {Button} from "@material-ui/core"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

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
                <AccountCircleIcon color="primary" onClick={this.redirectToSignin} />
            )
        }
}


export default withRouter(LoginButton)