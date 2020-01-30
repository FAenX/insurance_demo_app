import React from "react"
import {withRouter } from "react-router-dom";
import {Fab, FormHelperText} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


class MotorInsuranceButton extends React.Component{

    handleClickedBnt =(event)=>{
        event.preventDefault()       
        this.props.history.push("/covers")
    }

    render(){
        return(
            <div className="next-arrow" >
                <Fab color="primary" aria-label="add">             
                    <ArrowForwardIcon color="primary" onClick={this.handleClickedBnt}/>               
                </Fab> 
                <FormHelperText className="button-text">Motor insurance</FormHelperText>   
            </div>
        )
    }
}

export default withRouter(MotorInsuranceButton)

