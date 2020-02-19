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
import HomeButton from "../../../../components/HomeButton"
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
    handleClick=(event)=>{
        event.preventDefault();
        console.log(this.props)
        console.log(this.state)
        console.log(event.target.id)
        
        this.props.changeListener(event.target.id)
    }

    render(){
        
        return (           
            <div className="dash-menu">
                
                
            </div>
            
            
            
        );
    }
}

export default DashMenu;