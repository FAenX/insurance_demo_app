import React from "react"
import {Button} from "@material-ui/core"
import {withRouter } from "react-router-dom";
import PersonAddIcon from '@material-ui/icons/PersonAdd';



class GetStartedButton extends React.Component{

    handleClickedBnt =(event)=>{
       
        this.props.history.push("/signup")
    }

    render(){
        return(
            <div className="get-started-button"> 
            <Button variant="outlined">
                <PersonAddIcon color="primary" onClick={this.handleClickedBnt}/>
            </Button>               
                
            </div>
        )
    }
}

export default withRouter(GetStartedButton)

