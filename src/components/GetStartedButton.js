import React from "react"
import {withRouter } from "react-router-dom";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import {Fab, FormHelperText} from '@material-ui/core';


class GetStartedButton extends React.Component{

    handleClickedBnt =(event)=>{
       
        this.props.history.push("/signup")
    }

    render(){
        return(
            <div className="get-started-button"> 
            <Fab color="primary" aria-label="add" className="button-text">
                <PersonAddIcon color="primary" onClick={this.handleClickedBnt}/>
            </Fab> 
            
            <FormHelperText className="button-text">Sign Up</FormHelperText> 
            {/* wide screen   */}
            <div className="wide-screen">
                <PersonAddIcon color="primary" onClick={this.handleClickedBnt} />   
                <div className="nav-title">Sign Up</div>  
            </div>      
            
              
                  
                
            </div>
        )
    }
}

export default withRouter(GetStartedButton)

