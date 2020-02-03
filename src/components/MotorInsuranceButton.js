import React from "react"
import {withRouter } from "react-router-dom";
import {Fab, FormHelperText, Button } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


class MotorInsuranceButton extends React.Component{

    handleClickedBnt =(event)=>{
        event.preventDefault()       
        this.props.history.push("/covers")
    }

    render(){
        return(
            <div className="next-arrow" >
                <div className="mobile-screen button-text">
                    <FormHelperText>Motor insurance</FormHelperText> 
                    <Fab color="primary" aria-label="add" onClick={this.handleClickedBnt}>             
                        <ArrowForwardIcon color="primary"/>               
                    </Fab> 
                </div>
                {/* wide screen   */}
                <div className="wide-screen"> 
                    <Button onClick={this.handleClickedBnt}>
                        <div className="nav-home-button-label">
                            <ArrowForwardIcon color="primary" />
                            <div className="nav-title">Motor Insurance</div>  
                        </div>
                    
                    </Button>
                </div>  
            </div>
        )
    }
}

export default withRouter(MotorInsuranceButton)

