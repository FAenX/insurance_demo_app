import React from "react"
import {withRouter } from "react-router-dom";
import Fab from '@material-ui/core/Fab';
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
            </div>
        )
    }
}

export default withRouter(MotorInsuranceButton)

