import React from "react"
import PersonIcon from '@material-ui/icons/Person';
import {Button} from '@material-ui/core';
import SignIn from "../auth/SignIn"
import "./SignInButton.scss"

export class LoginButtonDesktop extends React.Component{
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
       
            {/* wide screen   */}
            <Button className="button-text" onClick={this.handleClickedBnt}>
                <PersonIcon color="primary" />  
                <div className="button-title">Sign in</div>  
            </Button>      
          
              
            
        </div>
    )
  }

}

export class LoginButtonMobile extends React.Component{
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
          
            
            <PersonIcon color="primary" onClick={this.handleClickedBnt}/>
            
           
           
        </div>
    )
  }

}


