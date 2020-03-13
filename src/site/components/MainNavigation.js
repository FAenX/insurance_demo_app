import React, { useState } from 'react';
import "./MainNavigation.scss"
import {Toolbar, Button} from "@material-ui/core"
import {Home, Today, SupervisedUserCircle, VerifiedUser} from "@material-ui/icons"
import IconButton from '@material-ui/core/IconButton';
import {Menu} from "@material-ui/icons"
import MobileNavigation from "./MobileNavigation"
import {Logo} from "../../assets/images/img_placeholder.png"
import {Link} from "react-router-dom"



const NavButton=props=>{
    const buttonStyle={
        textTransform: "capitalize",
        color: "inherit",
    }

    const navigate=()=>{
        props.navigate(props.id)
    }

    return  <Link to={props.id}>
                <Button style={buttonStyle} onClick={navigate}>
                    {props.icon}
                    {props.title}
                </Button>
            </Link>
}

const SignOutButton=props=>{

    const buttonStyle={
        textTransform: "capitalize",
        color: "inherit",
    }

    const signOut=()=>{
        sessionStorage.removeItem("user")
        sessionStorage.removeItem("tokens")
        props.onSignOut()
    }
    return <Button style={buttonStyle} onClick={signOut}>
                <SupervisedUserCircle />
                Sign out
            </Button>
}



const UserNavigation=(props)=>{
        
        return(
            <div className="user-navigation-button">
                <NavButton 
                    id="dashboard" 
                    title={`Howdy ${props.user.first_name}`}
                    icon={<SupervisedUserCircle />}
                    navigate={props.navigate}
                />
                <SignOutButton onSignOut={props.onSignOut}/>
            </div>
        )
    }

const AuthButtons=props=>{
    return(
        <>
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
        </>  
    )
}

const Navigation=props=>{
    const navStyle={
        width: "100%"
    }
    
    const chooseUserNav=()=>{
        console.log(props.user)
        if(props.user!==null){
            return <UserNavigation {...props} />
        }
        return <AuthButtons {...props}/>
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
            <div className="user-navigation">
               {chooseUserNav()}
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
                    <Navigation 
                        navigate={navigate} 
                        user={props.user} 
                        onSignOut={props.onSignOut}
                    />
                </div>
                <MobileNavigation 
                    navigate={navigate} 
                    open={open} 
                    user={props.user}
                />      
            </Toolbar>
            
        </div>
    );
   
}

export default MainNavigation;