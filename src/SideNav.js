import React from 'react';
import {withRouter} from "react-router-dom";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import SocialMedia from "./SocialMedia"

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
                        <hr className="devider"></hr>            
                        <ListItem button  id="home" onClick={this.handleRedirectOnClick}>                       
                            <ListItemText id="home" primary="Home"/>
                        </ListItem>
                        <hr className="devider"></hr>
                        <ListItem button id="covers" onClick={this.handleRedirectOnClick}>                       
                            <ListItemText  id="covers" primary="Insurance Covers"/>
                        </ListItem>
                        <hr className="devider"></hr>
                        <ListItem button id="claim" onClick={this.handleRedirectOnClick}>                       
                            <ListItemText  id="claim" primary="Claim"/>
                        </ListItem>
                        <hr className="devider"></hr>
                        <ListItem button id="whoarewe" onClick={this.handleRedirectOnClick}>                       
                            <ListItemText  id="whoarewe" primary="Who are we"/>
                        </ListItem>
                        <hr className="devider"></hr>
                        <ListItem button id="signout" onClick={this.handleRedirectOnClick}>                        
                            <ListItemText id="info" primary="What you need to know ..."/>
                        </ListItem>                           
                        <hr className="devider"></hr>            
                        <ListItem button id="signup" onClick={this.handleRedirectOnClick}>                        
                            <ListItemText id="signup" primary="Sign up"/>
                        </ListItem>
                        <hr className="devider"></hr>
                        <ListItem button id="signin" onClick={this.handleRedirectOnClick}>                        
                            <ListItemText id="signin" primary="Sign in"/>
                        </ListItem>
                        <hr className="devider"></hr>
                        <ListItem button id="dashboard" onClick={this.handleRedirectOnClick}>                        
                            <ListItemText id="dashboard" primary="Dashboard"/>
                        </ListItem>  
                        <hr className="devider"></hr>                   
                        <ListItem button id="signout" onClick={this.handleRedirectOnClick}>                        
                            <ListItemText id="signout" primary="Sign out"/>
                        </ListItem> 
                        <hr className="devider"></hr>
                        </List>
                        <SocialMedia/>
            </div>
            
        </SwipeableDrawer>
        
        </div>
    );
    }
}

export default withRouter(SideBar);