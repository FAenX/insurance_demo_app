import React from "react"
import {withRouter } from "react-router-dom";
import GetAppIcon from '@material-ui/icons/GetApp';
import MotorInsuranceQuoteForm from "./MotorInsuranceQuoteForm"
import {Fab, FormHelperText, Button} from '@material-ui/core';

class FreeQuotationButton extends React.Component{

    constructor(props){
        super(props);
        this.state = {
         
          //drawer
          isOpen: false,
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

  closeDrawer = ()=> {
    this.setState({ isOpen: false });
  };



    render(){
        return(
            <div className="free-quotation-button">
                
                <MotorInsuranceQuoteForm 
                    open={this.state.isOpen} 
                    toggleDrawer={this.toggleDrawer}
                    closeDrawer={this.closeDrawer}
                />
                {/* mobile screen */}
                <div className="mobile-screen button-text">
                    <FormHelperText>Get free quotation</FormHelperText>
                    <Fab color="primary" aria-label="add" onClick={this.handleClickedBnt}>
                        <GetAppIcon 
                            color="primary"                         
                        />
                    </Fab>
                </div>      
                {/* wide screen   */}
                
                <Button className="nav-button wide-screen" onClick={this.handleClickedBnt}>
                        <GetAppIcon 
                            color="primary"                         
                        />
                    <div className="nav-title">Get a free quotation</div>  
                </Button> 
                
              
                
                    
            </div>
        )
    }
}

export default withRouter(FreeQuotationButton)