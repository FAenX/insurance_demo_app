import React from "react"
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import {Fab, FormHelperText, Button} from '@material-ui/core';
import SignUp from "../auth/SignUp";
import "./GetStartedButton.scss"


export class GetStartedButtonDesktop extends React.Component{
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
            {/* wide screen   */}
            <Button className="button-text" onClick={this.handleClickedBnt}>
                <PersonAddIcon color="primary" />   
                <div className="button-title">Sign Up</div>  
            </Button> 
            </div>
        )
    }
}

export class GetStartedButtonMobile extends React.Component{
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
          <div className="button-text" >
            <FormHelperText>Sign Up</FormHelperText> 
            <Fab color="primary" aria-label="add" onClick={this.handleClickedBnt}>
                <PersonAddIcon color="primary"/>
            </Fab> 
          </div>      
          </div>
      )
  }
}


