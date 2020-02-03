import React from "react"
import {withRouter } from "react-router-dom";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import {Fab, FormHelperText, Button} from '@material-ui/core';
import SignUp from "../auth/SignUp";


class GetStartedButton extends React.Component{
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
            <div className="get-started-button"> 
            <SignUp 
                open={this.state.open}
                successListener={this.successListener}
            />
            {/* //mobile screen */}
            <div className="mobile-screen button-text" >
              <FormHelperText>Sign Up</FormHelperText> 
              <Fab color="primary" aria-label="add" onClick={this.handleClickedBnt}>
                  <PersonAddIcon color="primary"/>
              </Fab> 
            </div>      
            {/* wide screen   */}
            <Button className="wide-screen nav-button" onClick={this.handleClickedBnt}>
                <PersonAddIcon color="primary" />   
                <div className="nav-title">Sign Up</div>  
            </Button> 
            </div>
        )
    }
}

export default withRouter(GetStartedButton)

