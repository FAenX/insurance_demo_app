import React from "react"
import {withRouter} from "react-router-dom"
import PersonIcon from '@material-ui/icons/Person';
import {Button} from '@material-ui/core';
import SignIn from "../auth/SignIn"

class LoginButton extends React.Component{
  constructor(props){
    super(props)
    this.state={
      //drawer
      open: false
    }
  }
  handleClickedBnt =(event)=>{
    event.preventDefault()
      this.setState({open: !this.state.open}) 
    
}
successListener=()=>{
  this.setState({open:false})
}

render(){
    return(
        <div className="login-button">
          <SignIn 
            open={this.state.open}
            successListener={this.successListener}
          />              
        {/* //mobile screen */}
          <div className="mobile-screen">
            
            <PersonIcon color="primary" onClick={this.handleClickedBnt}/>
            
          </div>      
            {/* wide screen   */}
            <Button className="nav-button wide-screen" onClick={this.handleClickedBnt}>
                <PersonIcon color="primary" />  
                <div className="nav-title">Sign in</div>  
            </Button>      
          
              
            
        </div>
    )
  }

}


export default withRouter(LoginButton)