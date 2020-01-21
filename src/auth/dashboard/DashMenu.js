import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeButton from "../../utils/HomeButton"
import clsx from 'clsx';





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
                        Mini variant drawer
                    </Typography>
                    <HomeButton />
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
                    <div className="">
                    <IconButton onClick={this.handleDrawerClose}>
                    <ChevronRightIcon /> : <ChevronLeftIcon />
                    </IconButton>
                    </div>
                    
                </Drawer>
            </div>
            
            
            
        );
    }
}

export default DashMenu;