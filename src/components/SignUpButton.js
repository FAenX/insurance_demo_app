import React from "react"
import {withRouter } from "react-router-dom";
import PersonAddIcon from '@material-ui/icons/PersonAdd';


class SignUpButton extends React.Component{

    handleClickedBnt =(event)=>{
       
        this.props.history.push("/signup")
    }

    render(){
        return(
            <div className="signup-button"> 
             
                <PersonAddIcon color="primary" onClick={this.handleClickedBnt}/>
            
            </div>
        )
    }
}

export default withRouter(SignUpButton)

