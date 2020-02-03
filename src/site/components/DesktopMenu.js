import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import clsx from 'clsx';
import "./DesktopMenu.scss"
import ToolBar from "@material-ui/core/Toolbar"
import AppBar from "@material-ui/core/AppBar"
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import ListItemText from "@material-ui/core/ListItemText"
import {withRouter} from "react-router-dom";
import SignInButton from "../../components/SignInButton";
import GetStartedButton from "../../components/GetStartedButton"
import FreeQuotationButton from "../../components/FreeQuotationButton"





class DesktopMenu extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            open: true,
        }
    }

    togglerDrawer=()=>{
        this.setState({open: !this.state.open})
    }
  

    //redirect to id
    handleRedirectOnClick = (event)=>{
        let target; 
        if (event.target.id) {
            target = event.target.id
        }else{
            target = event.target.parentNode.id
        }
        this.setState({open: !this.state.open})
        this.props.history.push(`/${target}`)
    }

    render(){
        
        return (
           
            <div className="desktop-menu">
                <AppBar
                    className="AppBar"
                >
                    <ToolBar
                        variant="dense"
                        className="toolbar"
                    >
                        <IconButton
                            color="inherit"
                            onClick={this.togglerDrawer}
                            edge="start"
                        >
                            <MenuOpenIcon />
                        </IconButton>
                        <div className="user-buttons">
                            <FreeQuotationButton />
                            <GetStartedButton />
                            <SignInButton />
                        </div>
                    </ToolBar>
                </AppBar>
                
                <Drawer 
                open={this.state.open}
                variant="persistent"
                className={clsx("drawer", {
                    "drawerOpen": this.state.open,
                    "drawerClose": !this.state.open,
                  })}
                >
                    
                    <List>   
                        <hr className="divider"></hr>            
                        <ListItem 
                            button  
                            id="home" 
                            className="sliding-effect" 
                            onClick={this.handleRedirectOnClick}
                        >                       
                            <ListItemText id="home" primary="Home"/>
                        </ListItem>
                        <hr className="divider"></hr>
                        <ListItem 
                            button id="covers" 
                            onClick={this.handleRedirectOnClick}
                            className="sliding-effect" 
                        >                       
                        <ListItemText  id="covers" primary="Motor insurance"/>
                        </ListItem>
                        <hr className="divider"></hr>
                        <ListItem 
                            button id="claim" 
                            onClick={this.handleRedirectOnClick}
                            className="sliding-effect" 
                        >                         
                            <ListItemText  id="claim" primary="Make a claim"/>
                        </ListItem>
                        <hr className="divider"></hr>
                        <ListItem 
                            button id="about" 
                            onClick={this.handleRedirectOnClick}
                            className="sliding-effect1s" 
                        >                   
                            <ListItemText  id="about" primary="Who are we"/>
                        </ListItem>
                        <hr className="divider"></hr>        
                        <ListItem 
                            button id="covers" 
                            onClick={this.handleRedirectOnClick}
                            className="sliding-effect2s" 
                        >                          
                            <ListItemText id="dashboard" primary="Dashboard"/>
                        </ListItem>  
                        <hr className="divider"></hr>                   
                        
                        </List>
                       
                    
                </Drawer>
            </div>
            
            
            
        );
    }
}

export default withRouter(DesktopMenu);