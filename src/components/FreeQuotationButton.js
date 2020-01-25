import React from "react"
import {withRouter } from "react-router-dom";
import GetAppIcon from '@material-ui/icons/GetApp';
import MotorInsuranceQuoteForm from "./MotorInsuranceQuoteForm"
import {Fab, FormHelperText} from '@material-ui/core';

class FreeQuotationButton extends React.Component{

    constructor(props){
        super(props);
        this.state = {
         
          //drawer
          isOpen: false,
    
          //snackbar
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
                <Fab color="primary" aria-label="add">
                    <GetAppIcon 
                        color="primary" 
                        onClick={this.handleClickedBnt}
                    />
                </Fab>  
                <FormHelperText>Get free quotation</FormHelperText>

                
                
                
            </div>
        )
    }
}

export default withRouter(FreeQuotationButton)