import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import HomeButton from "../../components/HomeButton"
import clsx from 'clsx';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ListItemIcon from "@material-ui/core/ListItemIcon"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SecurityIcon from '@material-ui/icons/Security';





class DashMenu extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            open: false,
        }
    }

    onOpen=()=>{
        this.setState({
            open: true,
        })
    }

    onClose=()=>{
        this.setState({
            open: false,
        }) 
    }
  

    handleDrawerOpen = () => {
        this.setState({
            open: true,
        })
    };

    handleDrawerClose = () => {
        this.setState({
            open: false,
        })
    };

    render(){
        
        return (
           
            <div className="dash-menu">
                <AppBar
                    position="fixed"
                    className={clsx("AppBar", {
                        "appBarShift": this.state.open,
                      })}
                >
                    <Toolbar
                        variant="dense"
                        className="toolbar"
                    >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={this.handleDrawerOpen}
                        edge="start"
                        
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Dashboard
                    </Typography>
                    
                        
                    </Toolbar>
                </AppBar>
                <Drawer 
                open={this.state.open}
                variant="permanent"
                className={clsx("drawer", {
                    "drawerOpen": this.state.open,
                    "drawerClose": !this.state.open,
                  })}
                  classes={{
                    paper: clsx({
                      "drawerOpen": this.state.open,
                      "drawerClose": !this.state.open,
                    }),
                  }}
                >
                    <div className="toolbar">
                        <IconButton onClick={this.handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <hr className="divider"></hr>
                    <List>
                    <ListItem button>
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Account" />
                    </ListItem>
                    <ListItem button>
                    <ListItemIcon>
                        <AttachMoneyIcon />
                    </ListItemIcon>
                        <ListItemText primary="Payment history" />
                    </ListItem>
                    
                    <ListItem button>
                    <ListItemIcon>
                        <SecurityIcon />
                    </ListItemIcon>
                        <ListItemText primary="Insurance covers" />
                    </ListItem>
                    </List>
                    <hr className="divider"></hr>
                    <List>
                    <ListItem button>
                        <ListItemIcon>
                            <HomeButton />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                    
                    
                    </List>
                    
                </Drawer>
            </div>
            
            
            
        );
    }
}

export default DashMenu;