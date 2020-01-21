import React from "react"
import {withRouter } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';


class HomeButton extends React.Component{

    handleClickedBnt =(event)=>{
       
        this.props.history.push("/home")
    }

    render(){
        return(
            <div className="home-button"> 
             
             <HomeIcon color="primary" onClick={this.handleClickedBnt}/>
              
            
              
                  
                
            </div>
        )
    }
}

export default withRouter(HomeButton)

