import React from "react"
import Button from '@material-ui/core/Button';
import {withRouter } from "react-router-dom";


class Home extends React.Component{
    handleClickedBnt =(event)=>{
        let target; 
        if (event.target.id) {
            target = event.target.id
        }else{
            target = event.target.parentNode.id
        }
        console.log(target)
        this.props.history.push(`/${target}`)
    }
    render(){
        return(
            <div className="home">
                <div className="headline-text">
                    <h1> Buy Motor Vehicle Insurance directly from your Phone</h1>
                   
                </div>
                <div className="headline-subtext">
                <p> Pay through a range of available payment options and download a printable copy of your insurance cover</p>
                
                </div>
                <div className="home-buttons">
                    <div className="get-started-button"><Button variant="contained" id="signup" onClick={this.handleClickedBnt}>Create Free Account</Button></div>
                    <div className="free-quotation-button"><Button variant="outlined"  id="rates" onClick={this.handleClickedBnt}>Get a free quotation</Button></div>
                </div>
            </div>
        )
    }
}

export default withRouter(Home);