import React from "react"
import {withRouter} from "react-router-dom"
import PersonIcon from '@material-ui/icons/Person';

class LoginButton extends React.Component{
  handleClickedBnt =(event)=>{
    event.preventDefault()
       
    this.props.history.push("/signin")
}

render(){
    return(
        <div className="login-button"> 
         
         <PersonIcon color="primary" onClick={this.handleClickedBnt}/>
               
        
          
              
            
        </div>
    )
  }

}


export default withRouter(LoginButton)