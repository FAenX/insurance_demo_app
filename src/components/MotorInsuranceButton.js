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
                <Fab color="primary" aria-label="add" className="button-text mobile-screen">             
                    <ArrowForwardIcon color="primary" onClick={this.handleClickedBnt}/>               
                </Fab> 
                <FormHelperText className="button-text">Motor insurance</FormHelperText> 

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

