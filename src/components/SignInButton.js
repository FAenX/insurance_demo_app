import React from "react"
import {withRouter} from "react-router-dom"
import PersonIcon from '@material-ui/icons/Person';
import {Fab, FormHelperText, Button} from '@material-ui/core';

class LoginButton extends React.Component{
  handleClickedBnt =(event)=>{
    event.preventDefault()
       
    this.props.history.push("/signin")
}

render(){
    return(
        <div className="login-button">                
        {/* //mobile screen */}
          <div className="mobile-screen">
            <Fab color="primary" aria-label="add" className="button-text">
            <PersonIcon color="primary" onClick={this.handleClickedBnt}/>
            </Fab> 
            
            <FormHelperText className="button-text">Sign in</FormHelperText> 
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