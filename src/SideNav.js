import React from 'react';
import {withRouter} from "react-router-dom";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from "@material-ui/core/AppBar"
import MenuOpenIcon from '@material-ui/icons/MenuOpen';


class SideBar extends React.Component {

    constructor(props){
        super(props)
        this.state={
            active: "",
            style: {
                display: "none"
            },
            left: false,

        }
        
    }

    //redirect to id
    handleRedirectOnClick = (event)=>{
        let target; 
        if (event.target.id) {
            target = event.target.id
        }else{
            target = event.target.parentNode.id
        }
       
        this.props.history.push(`/${target}`)
    }

    handleSignOut=(event)=>{
        this.props.history.push("/home")
    }
    
    render(){
    return (
        
        <SwipeableDrawer
            open={this.props.drawer}
            onClose={this.props.toggleDrawer(false)}
            onOpen={this.props.toggleDrawer(true)}
        >
            <div  
            className="sidenav" 
            role="presentation"  
            onClick={this.props.toggleDrawer(false)} 
            onKeyDown={this.props.toggleDrawer(false)}
            >
                <AppBar className="close-btn-wrapper" 
                        onClick={this.props.toggleDrawer(false)}
                    >
                        <div className="close-btn">
                            <MenuOpenIcon color="primary" />
                        </div>
                        <div className="sliding-effect8s appbar-title">Menu</div>
                    </AppBar>
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
                            button id="covers" 
                            onClick={this.handleRedirectOnClick}
                            className="sliding-effect" 
                        >                         
                            <ListItemText  id="claim" primary="Make a claim"/>
                        </ListItem>
                        <hr className="divider"></hr>
                        <ListItem 
                            button id="covers" 
                            onClick={this.handleRedirectOnClick}
                            className="sliding-effect1s" 
                        >                   
                            <ListItemText  id="about" primary="Who are we"/>
                        </ListItem>
                        <hr className="divider"></hr>        
                        <ListItem 
                            button id="covers" 
                            onClick={this.handleRedirectOnClick}
                            className="sliding-effect1s" 
                        >                        
                            <ListItemText id="signup" primary="Sign up"/>
                        </ListItem>
                        <hr className="divider"></hr>
                        <ListItem 
                            button id="covers" 
                            onClick={this.handleRedirectOnClick}
                            className="sliding-effect2s" 
                        >                     
                            <ListItemText id="signin" primary="Sign in"/>
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
                        <ListItem 
                            button id="covers" 
                            onClick={this.handleRedirectOnClick}
                            className="sliding-effect2s" 
                        >                            
                            <ListItemText id="signout" primary="Sign out" />
                        </ListItem> 
                        <hr className="divider"></hr>
                        </List>
                       
            </div>
            
        </SwipeableDrawer>
        
        
    );
    }
}

export default withRouter(SideBar);