import React from "react"
import {withRouter } from "react-router-dom";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Fab from '@material-ui/core/Fab';


class HomeButton extends React.Component{

    handleClickedBnt =(event)=>{
       
        this.props.history.push("/home")
    }

    render(){
        return(
            <div className=""> 
             <Fab color="primary" aria-label="add">
             <PersonAddIcon color="primary" onClick={this.handleClickedBnt}/>
                </Fab>      
            
              
                  
                
            </div>
        )
    }
}

export default withRouter(HomeButton)

