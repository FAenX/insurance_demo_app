import React from "react"
import {withRouter } from "react-router-dom";
import SendIcon from '@material-ui/icons/Send';
import {Button} from "@material-ui/core"
import MotorInsuranceQuoteForm from "./MotorInsuranceQuoteForm"


class FreeQuotationButton extends React.Component{

    constructor(props){
        super(props);
        this.state = {
         
          //drawer
          isOpen: false,
    
          //backdrop
          open: false
        }
       
      }

    handleClickedBnt =(event)=>{       
        this.setState({
            isOpen: true
        })
    }

     //toggle drawer
     toggleDrawer = (open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        this.setState({ isOpen: open });
    };


    render(){
        return(
            <div className="free-quotation-button">
                <MotorInsuranceQuoteForm 
                    open={this.state.isOpen} 
                    toggleDrawer={this.toggleDrawer}
                />
                <Button variant="outlined">
                    <SendIcon color="primary" onClick={this.handleClickedBnt}/>
                </Button>
            </div>
        )
    }
}

export default withRouter(FreeQuotationButton)