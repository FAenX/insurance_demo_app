import React from "react"
import {withRouter } from "react-router-dom";
import SendIcon from '@material-ui/icons/Send';


class FreeQuotationButton extends React.Component{

    handleClickedBnt =(event)=>{
        this.props.history.push("/rates")
    }

    render(){
        return(
            <div className="free-quotation-button">
                <SendIcon color="primary" onClick={this.handleClickedBnt}/>
            </div>
        )
    }
}

export default withRouter(FreeQuotationButton)