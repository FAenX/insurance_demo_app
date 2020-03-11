import React, { useState } from 'react';
import "./MainNavigation.scss"
import {Toolbar, Button} from "@material-ui/core"
import {Home, Today, SupervisedUserCircle, VerifiedUser} from "@material-ui/icons"
import IconButton from '@material-ui/core/IconButton';
import {Menu} from "@material-ui/icons"
import MobileNavigation from "./MobileNavigation"
import {Logo} from "../../assets/images/img_placeholder.png"

const NavButton=props=>{
    const buttonStyle={
        textTransform: "capitalize",
        color: "inherit",
    }

    const navigate=()=>{
        props.navigate(props.id)
    }

    return <Button style={buttonStyle} onClick={navigate}>
                {props.icon}
                {props.title}
            </Button>
}

const Navigation=props=>{
    const navStyle={
        width: "100%"
    }

    return (
            <div style={navStyle} className="desktop-navigation">
            <div>
                <NavButton 
                    id="home" 
                    title="Home" 
                    icon={<Home/>}
                    navigate={props.navigate}
                />
                <NavButton 
                    id="quotation" 
                    title="Request a quotation" 
                    icon={<Today />}
                    navigate={props.navigate}
                />
            </div>
            <div>
                <NavButton 
                    id="signup" 
                    title="Create Account" 
                    icon={<SupervisedUserCircle />}
                    navigate={props.navigate}
                />
                <NavButton 
                    id="signin" 
                    title="Sign In" 
                    icon={<VerifiedUser />} 
                    navigate={props.navigate}
                />
            </div>
            
           
            
        </div>
    )
}

const MainNavigation =props=> {
    const [open, setOpen] = useState(false)
    const toolbarStyle={
        position: "fixed",
        top: "0",
        right: "0",
        left: "0",
        minHeight: "8vh",
        backgroundColor: "white",
        zIndex: "1300",
        overflow: "hidden",
        transition: "height .5s",
    }
    const navigate=(id)=>{
        props.navigate(id)
        setOpen(false)
    }

    const innerNavStyle={
        display: "flex", 
        flexFlow: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between"
    }

    return (
        <div className="main-navigation">
            <Toolbar
                style={toolbarStyle}
                variant="dense"
                className="toolbar"
            >
                <div style={innerNavStyle}>
                    <IconButton>
                        <img src={Logo} alt="logo"/>
                    </IconButton>
                    <div className="mobilenav-button">                   
                        <IconButton>
                            <Menu onClick={()=>{setOpen(!open)}}/>
                        </IconButton>                
                    </div>
                    <Navigation navigate={navigate}/>
                </div>
                 
               
                
                <MobileNavigation navigate={navigate} open={open}/>      
            </Toolbar>
            
        </div>
    );
   
}

export default MainNavigation;