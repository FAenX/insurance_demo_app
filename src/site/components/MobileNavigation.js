import React, {useState} from "react"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {Divider, Button} from "@material-ui/core"
import "./MobileNavigation.scss"
import {Home, Today, SupervisedUserCircle, VerifiedUser} from "@material-ui/icons"

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

const MobileNavigation =props=>{


    const height=()=>{
        if(props.open){
            return "40vh"
        }
        return "1px"
    }


    const navStyle ={
        height: height(),
        transition: "height .25s",
        overflow: "hidden",
        width: "100%",
    }

    const listStyle ={
        width: "100%",
    }
    

    return(
        <div className="mobile-navigation" style={navStyle}>
            <div className="mobile-nav" style={{width: "100%"}}>  
                <List style={listStyle}>  
                    
                    <Divider />    
                    <ListItem>                       
                        <NavButton 
                            id="home" 
                            title="Home" 
                            icon={<Home/>}
                            navigate={props.navigate}
                        />                       
                    </ListItem>
                    <Divider />
                    <ListItem>                       
                        <NavButton 
                            id="quotation" 
                            title="Request a quotation" 
                            icon={<Today />}
                            navigate={props.navigate}
                        />
                    </ListItem>
                    <Divider />
                    <ListItem>                         
                        <NavButton 
                            id="signup" 
                            title="Create Account" 
                            icon={<SupervisedUserCircle />}
                            navigate={props.navigate}
                        />
                    </ListItem>
                    <Divider />
                    <ListItem>   
                        <NavButton 
                            id="signin" 
                            title="Sign In" 
                            icon={<VerifiedUser />} 
                            navigate={props.navigate}
                        />
                    </ListItem>
                </List>
            </div>
           
        </div>
        
    )

} 

export default MobileNavigation;