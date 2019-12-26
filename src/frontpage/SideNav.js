import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles({
  list: {
    width: "100vh",
  },
  fullList: {
    width: 'auto',
  },
});

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
                        <ListItem button>                       
                            <ListItemText  primary="Home"/>
                        </ListItem>
                        <Divider />
                        <ListItem button>                       
                            <ListItemText  primary="Insurance Covers"/>
                        </ListItem>
                        <Divider />
                        <ListItem button>                       
                            <ListItemText  primary="Claim"/>
                        </ListItem>
                        <Divider />
                        <ListItem button>                       
                            <ListItemText  primary="Who are we"/>
                        </ListItem>
                        <Divider />                   
                        <ListItem button >                        
                            <ListItemText primary="Sign up"/>
                        </ListItem>
                        <Divider />
                        <ListItem button >                        
                            <ListItemText primary="Sign in"/>
                        </ListItem>
                        <Divider />
                        <ListItem button >                        
                            <ListItemText primary="Dashboard"/>
                        </ListItem>  
                        <Divider />                      
                        <ListItem button >                        
                            <ListItemText primary="Sign out"/>
                        </ListItem> 
                        <Divider />   
                        </List>
            </div>
        </SwipeableDrawer>
        
        </div>
    );
    }
}

export default SideBar;