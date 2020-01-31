import React from "react"
import {withRouter } from "react-router-dom";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import {Fab, FormHelperText, Button} from '@material-ui/core';


class GetStartedButton extends React.Component{

    handleClickedBnt =(event)=>{
       
        this.props.history.push("/signup")
    }

    render(){
        return(
            <div className="get-started-button"> 
            {/* //mobile screen */}
            <div className="mobile-screen">
            <Fab color="primary" aria-label="add" className="button-text">
                <PersonAddIcon color="primary" onClick={this.handleClickedBnt}/>
            </Fab> 
            
            <FormHelperText className="button-text">Sign Up</FormHelperText> 
            </div>      
            {/* wide screen   */}
            <Button className="nav-button wide-screen" onClick={this.handleClickedBnt}>
                <PersonAddIcon color="primary" />   
                <div className="nav-title">Sign Up</div>  
            </Button>      
            
              
                  
                
            </div>
        )
    }
}

export default withRouter(GetStartedButton)

