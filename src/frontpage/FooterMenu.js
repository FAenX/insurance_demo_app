import React from "react"
import {withRouter} from "react-router-dom"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Divider from "@material-ui/core/Divider"

class FooterMenu extends React.Component {
    

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

    render(){
        return(
            <div className="footer-menu">
                <List>   
                         
                <ListItem button id="covers" onClick={this.handleRedirectOnClick}>                       
                    <ListItemText  id="covers" primary="Insurance Covers"/>
                </ListItem>
                <hr className="devider"></hr>
                <ListItem button id="claim" onClick={this.handleRedirectOnClick}>                       
                    <ListItemText  id="claim" primary="Claim"/>
                </ListItem>
                <hr className="devider"></hr>
                <ListItem button id="whoarewe" onClick={this.handleRedirectOnClick}>                       
                    <ListItemText  id="whoarewe" primary="Who are we"/>
                </ListItem>
                <hr className="devider"></hr>
                <ListItem button id="signout" onClick={this.handleRedirectOnClick}>                        
                    <ListItemText id="info" primary="What you need to know ..."/>
                </ListItem>                     
                <hr className="devider"></hr>              
                <ListItem button id="signup" onClick={this.handleRedirectOnClick}>                        
                    <ListItemText id="signup" primary="Sign up"/>
                </ListItem>
                <hr className="devider"></hr>
                <ListItem button id="signin" onClick={this.handleRedirectOnClick}>                        
                    <ListItemText id="signin" primary="Sign in"/>
                </ListItem>
                <hr className="devider"></hr>
                </List>
            </div>
        )
    }
}

export default withRouter(FooterMenu);