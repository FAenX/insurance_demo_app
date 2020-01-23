import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import SignInButton from "./SignInButton"
import ListItemIcon from "@material-ui/core/ListItemIcon";
import SignUpButton from "./SignInButton";
import HomeButton from "./HomeButton"


class SignInAlert extends React.Component{
  
    render(){

   

        return (
            <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" open={true}>
            <DialogTitle id="simple-dialog-title">Oops! Session not found.</DialogTitle>
            <List>
                
                <ListItem button >
                    <ListItemIcon>
                        <SignInButton />
                    </ListItemIcon>                    
                    <ListItemText primary="Sign in" />
                </ListItem>
                <ListItem button >
                    <ListItemIcon>
                        <SignUpButton />
                    </ListItemIcon>                    
                    <ListItemText primary="Create account" />
                </ListItem>
                <ListItem button >
                    <ListItemIcon>
                        <HomeButton />
                    </ListItemIcon>                    
                    <ListItemText primary="Go back" />
                </ListItem>
            </List>
            </Dialog>
        );
    }
}

export default SignInAlert
