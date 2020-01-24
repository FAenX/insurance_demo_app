import React from 'react';
import {withRouter} from "react-router-dom";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


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
        <div>
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
                    <List>   
                        <hr className="divider"></hr>            
                        <ListItem button  id="home" onClick={this.handleRedirectOnClick}>                       
                            <ListItemText id="home" primary="Home"/>
                        </ListItem>
                        <hr className="divider"></hr>
                        <ListItem button id="covers" onClick={this.handleRedirectOnClick}>                       
                            <ListItemText  id="covers" primary="Motor insurance"/>
                        </ListItem>
                        <hr className="divider"></hr>
                        <ListItem button id="claim" onClick={this.handleRedirectOnClick}>                       
                            <ListItemText  id="claim" primary="Make a claim"/>
                        </ListItem>
                        <hr className="divider"></hr>
                        <ListItem button id="about" onClick={this.handleRedirectOnClick}>                       
                            <ListItemText  id="about" primary="Who are we"/>
                        </ListItem>
                        <hr className="divider"></hr>        
                        <ListItem button id="signup" onClick={this.handleRedirectOnClick}>                        
                            <ListItemText id="signup" primary="Sign up"/>
                        </ListItem>
                        <hr className="divider"></hr>
                        <ListItem button id="signin" onClick={this.handleRedirectOnClick}>                        
                            <ListItemText id="signin" primary="Sign in"/>
                        </ListItem>
                        <hr className="divider"></hr>
                        <ListItem button id="dashboard" onClick={this.handleRedirectOnClick}>                        
                            <ListItemText id="dashboard" primary="Dashboard"/>
                        </ListItem>  
                        <hr className="divider"></hr>                   
                        <ListItem button id="signout" onClick={this.handleSignOut}>                        
                            <ListItemText id="signout" primary="Sign out" />
                        </ListItem> 
                        <hr className="divider"></hr>
                        </List>
                       
            </div>
            
        </SwipeableDrawer>
        
        </div>
    );
    }
}

export default withRouter(SideBar);