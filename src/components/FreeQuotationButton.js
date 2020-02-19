import React from "react"
import GetAppIcon from '@material-ui/icons/GetApp';
import MotorInsuranceQuoteForm from "./MotorInsuranceQuoteForm"
import {Fab, FormHelperText, Button} from '@material-ui/core';
import "./FreeQuotationButton.scss"

export class FreeQuotationButtonDesktop extends React.Component{

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
                {/* wide screen   */}
                
                <Button variant="outlined" className="button-text" onClick={this.handleClickedBnt}>
                        <GetAppIcon 
                            color="primary"                         
                        />
                    <div className="button-title">Get a free quotation</div>  
                </Button> 
                
              
                
                    
            </div>
        )
    }
}

export class FreeQuotationButtonMobile extends React.Component{

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
                <div className="button-text">
                    <FormHelperText>Get free quotation</FormHelperText>
                    <Fab color="primary" aria-label="add" onClick={this.handleClickedBnt}>
                        <GetAppIcon 
                            color="primary"                         
                        />
                    </Fab>
                </div>      
               
            </div>
        )
    }
}