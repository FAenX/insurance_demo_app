import React from 'react';
import "./DesktopMenu.scss"
import {Toolbar, Button} from "@material-ui/core"
import {Home, Today, Pages, SupervisedUserCircle, VerifiedUser} from "@material-ui/icons"

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
        display: "flex",
        flexFlow: "row",
        justifyContent: "space-between",
        width: "100%"
    }

    return (<div style={navStyle}>
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
                <NavButton 
                    id="about" 
                    title="About" 
                    icon={<Pages />}
                    navigate={props.navigate}
                />
            </div>
            <div>
                <NavButton id="signup" title="Create Account" icon={<SupervisedUserCircle />}/>
                <NavButton id="signin" title="Sign In" icon={<VerifiedUser />} />
            </div>
            </div>
    )
}

const DesktopMenu =props=> {
    const toolbarStyle={
        position: "fixed",
        top: "0",
        right: "0",
        left: "0",
        height: "7vh",
        backgroundColor: "white",
        zIndex: "1300"
    }
    const navigate=(id)=>{
        props.navigate(id)
    }
    return (
        <div className="desktop-menu">
            <Toolbar
                style={toolbarStyle}
                variant="dense"
                className="toolbar"
            >
                
               <Navigation navigate={navigate}/>                         
            </Toolbar>
        </div>
    );
   
}

export default DesktopMenu;