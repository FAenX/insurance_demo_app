import React from "react"
import {withRouter } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import IconButton from "@material-ui/core/IconButton"
import Button from "@material-ui/core/Button"


class HomeButton extends React.Component{

    handleClickedBnt =(event)=>{
       
        this.props.history.push("/home")
    }

    render(){
        return(
            <div className="home-button "> 
                <div className="mobile-screen">
                    <HomeIcon color="primary" onClick={this.handleClickedBnt}/>                    
                </div>
                <div className="wide-screen">
                    <Button onClick={this.handleClickedBnt}>
                        <div className="nav-home-button-label">
                            <HomeIcon color="primary" />
                            <div className="nav-title">Home</div>  
                        </div>
                    
                    </Button>
                    
                    
                </div>
             
             
            </div>
        )
    }
}

export default withRouter(HomeButton)

