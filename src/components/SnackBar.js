import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';

import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import Icon from "@material-ui/core/Icon"





class SnackbarContentWrapper extends React.Component{

  constructor(props){
    super(props)
    this.state={
      status: ""
    }
  }

  render(){
    let icon;
    const error=(status)=>{
      console.log(status)
      if(status==="error"){
        icon = <ErrorIcon />
        return true
      }
    }

    const success =(status)=>{
      if(status==="success"){
        icon = <CheckCircleIcon />
        return true
      }
    }
    return (
      <SnackbarContent
      className={clsx("snackbar",{
        "error": error(this.props.variant),
        "success": success(this.props.variant)
      })}
        aria-describedby="client-snackbar"
        message={
          <span id="client-snackbar" className="">
            <Icon className="" />
            <IconButton>
              {icon}
            </IconButton>
            {this.props.message}
          </span>
        }
        onClose={this.props.onClose}
        action={[
          <IconButton key="close" aria-label="close" color="inherit" >
            <CloseIcon className="" onClick={this.props.onClose}/>
          </IconButton>,
        ]}
      />
    );
  }
}



class CustomizedSnackbar extends React.Component {

      render(){
        return (
          
            
            <Snackbar
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              open={this.props.show}
              autoHideDuration={3000}
              onClose={this.props.onClose}
            >
              <SnackbarContentWrapper
                onClose={this.props.onClose}
                variant={this.props.status}
                message={this.props.message}
              />
            </Snackbar>
         
        );
      }

  
}

export default CustomizedSnackbar