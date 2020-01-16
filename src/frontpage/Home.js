import React from "react"
import {withRouter } from "react-router-dom";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


class Home extends React.Component{
   
    render(){
        return(
            <div className="home">
                <div className="headline-text">
                     Buy Motor Vehicle Insurance directly from your Phone
                   
                </div>
                <div className="headline-subtext">
                <p> Pay through a range of available payment options and download a printable copy of your insurance cover</p>
                
                </div>
                <ArrowForwardIcon />
            </div>
        )
    }
}

export default withRouter(Home);