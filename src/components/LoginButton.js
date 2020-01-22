import React from "react"
import {withRouter} from "react-router-dom"
import PersonIcon from '@material-ui/icons/Person';
import Fab from "@material-ui/core/Fab"

class LoginButton extends React.Component{
  handleClickedBnt =(event)=>{
    event.preventDefault()
       
    this.props.history.push("/signin")
}

render(){
    return(
        <div className="login-button"> 
         <Fab color="primary" aria-label="add">
         <PersonIcon color="primary" onClick={this.handleClickedBnt}/>
          </Fab>      
        
          
              
            
        </div>
    )
  }

}


export default withRouter(LoginButton)