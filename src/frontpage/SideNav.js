import React from "react"
import {withRouter} from  "react-router-dom";



class SideNav extends React.Component {
    constructor(props){
        super(props)
        this.state={
            active: "",
            style: {
                display: "none"
            }

        }
    }

    handleClose = () => {
        this.props.close();
    }

    handleLoginNav = () =>{
        this.props.history.push("/login")
    }

    handleSignUpNav = () =>{
        this.props.history.push("/signup")
    }
    
    handleDashNavClick =(event)=>{
        
        this.setState({
            active: event.target.id
        })
        
        this.props.history.push(`/${event.target.id}`)
        
    }
    render(){
        let style;
        let dashboardNavs;
        

        if (this.props.isLoggedIn === true){
            dashboardNavs = <div className="nav-items">                    
                                <p id="dashboard" onClick={this.handleDashNavClick}>My dashboard</p>            
                            </div>
        }
       
        if (this.props.open===true){            
            style = {display: "block"}           
        }else if (this.props.open===false){
            style = this.state.style
        }

        return(
            <div className="sidenav" style={style}>
                <div className="closebtn" onClick={this.handleClose}>&times;</div>
                <div className="nav-items">                    
                    <div id="home" className="nav-item" onClick={this.handleDashNavClick} >Home</div>
                    <p id ="covers" className="nav-item" onClick={this.handleDashNavClick}>Insurance covers</p>
                    <p id = "claim" className="nav-item" onClick={this.handleDashNavClick}>Claim</p>
                    <p id = "whoarewe" className="nav-item" onClick={this.handleDashNavClick}>Who are we?</p>
                    <p id = "signin" className="nav-item" onClick={this.handleLoginNav}>Log in</p>  
                    <p id ="signup" className="nav-item" onClick={this.handleSignUpNav}>Sign up</p> 
                    <p id ="signup" className="nav-item" onClick={this.handleSignUpNav}>Sign out</p>  
                    <div>{dashboardNavs}</div>                 
                </div>
               
            </div>   
        )
    }
}

export default withRouter(SideNav);