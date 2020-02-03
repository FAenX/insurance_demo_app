import React from "react"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import ListItemText from "@material-ui/core/ListItemText"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import clsx from 'clsx';
import {AppBar} from "@material-ui/core"
import Logo from "../../assets/images/img_placeholder.png"
import {MenuOpen} from "@material-ui/icons"
import "./MobileNavigation.scss"
import SignInButton from "../../components/SignInButton";
import IconButton from '@material-ui/core/IconButton';
import {withRouter} from "react-router-dom"

class SideNavigation extends React.Component {
    constructor(props){
        super(props)
        this.state={
            open: false
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
    
    toggleDrawer=()=>{
        this.setState({open: !this.state.open})
    }

    render(){
        return(
            <div className="mobile-navigation">
               <AppBar className={clsx("App-header",{
                  "appBarShift": true,
                })}>
                    <div className="menu-icon" > 
                    <IconButton onClick={this.toggleDrawer}>
                        <MenuOpen />
                    </IconButton>
                    </div> 
                    <div className="logo">
                    <img alt="logo" src={Logo}/>
                    </div>
                    
                    <div className="nav-login" onClick={this.redirectToSignin}>
                    <SignInButton />
                    </div>
                </AppBar>
                
                <SwipeableDrawer
                    open={this.state.open}
                    onClose={this.toggleDrawer}
                    onOpen={this.toggleDrawer}
                >
                    <div  
                        className="sidenav" 
                        role="presentation"  
                        onClick={this.toggleDrawer} 
                        onKeyDown={this.toggleDrawer}
                    >
                        <AppBar className="close-btn-wrapper" 
                                onClick={this.toggleDrawer}
                            >
                                <div className="close-btn">
                                    <MenuOpen color="primary" />
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
                                    button id="signup" 
                                    onClick={this.handleRedirectOnClick}
                                    className="sliding-effect1s" 
                                >                        
                                    <ListItemText id="signup" primary="Sign up"/>
                                </ListItem>
                                <hr className="divider"></hr>
                                <ListItem 
                                    button id="signin" 
                                    onClick={this.handleRedirectOnClick}
                                    className="sliding-effect2s" 
                                >                     
                                    <ListItemText id="signin" primary="Sign in"/>
                                </ListItem>
                                <hr className="divider"></hr>
                                <ListItem 
                                    button 
                                    id="dashboard" 
                                    onClick={this.handleRedirectOnClick}
                                    className="sliding-effect2s" 
                                >                          
                                    <ListItemText id="dashboard" primary="Dashboard"/>
                                </ListItem>  
                                <hr className="divider"></hr>                   
                                <ListItem 
                                    button id="signout" 
                                    onClick={this.handleRedirectOnClick}
                                    className="sliding-effect2s" 
                                >                            
                                    <ListItemText id="signout" primary="Sign out" />
                                </ListItem> 
                                <hr className="divider"></hr>
                                </List>
                            
                            </div>
                    
                        </SwipeableDrawer>
                    </div>
            
        )
    }
} 

export default withRouter(SideNavigation);