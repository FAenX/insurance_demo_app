import React from 'react';
import './App.css';
import Rates from "./covers/Rates"
import Cover from "./covers/Cover"
import Quotation from "./covers/Quotation"
import PaymentOptions from "./payments/PaymentOptions"
import Mpesa from "./payments/Mpesa"
import Covers from "./covers/Covers";
import FrontPage from "./frontpage/frontPage";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import SideNav from "./SideNav"
import Footer from "./Footer";
import SignIn from "./auth/SignIn"
import SignUp from "./auth/SignUp"
import Dashboard from "./auth/dashboard/Dashboard"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import FooterMenu from "./FooterMenu"
import SocialMedia from "./SocialMedia"
import Product from './covers/Product';
import Claim from "./claims/Claim"
import WhoAreWe from "./whoarewe/WhoAreWe"
import EverythingYouNeedToKnow from "./everythingYouNeedToKnow/everythingYouNeedToKnow"
import dotenv from "dotenv"
import LoginButton from "./LoginButton"

dotenv.config()


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
     
      //drawer
      isOpen: false,
      isLoggedIn: false,
    }
  }

  componentWillMount=()=>{
    // init session
    fetch("/api/v1/products/sub-categories/", {
      method: "GET",                
      }).then(res=>{
          if(res.status === 200){
              res.json().then((data)=>{
                  //console.log(data)
                  sessionStorage.setItem("sub_categories", JSON.stringify(data))                   

              }).catch((error)=>{
                  console.log(error)
                  console.log(res)
              })
          } else {
              console.log(res)
          }
      }).catch((err)=>{
          console.log(err)
      })

      fetch("api/v1/products/", {
        method: "GET" 
        }).then((res)=>{
            if(res.status === 200){
                res.json().then((data)=>{       
                    sessionStorage.setItem("products", JSON.stringify(data[0].products))                        
                
                  }).catch((error)=>{
                    console.log(error)
                    console.log(res)
                })
            } else {
                console.log(res)
            }
            
        }).catch((err)=>{
            console.log(err)
        })    

  }

  
  componentDidMount=()=> {
    this.setState({
      isOpen: false
    })
    
  }

  //handle logout
  handleLoginLogout =()=>{
    this.setState({
      isLoggedIn: true
    })
  }


  //toggle drawer
  toggleDrawer = (open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
    }
    this.setState({ isOpen: open });
    };

  

  render(){
  return (
    <Router>
      <SideNav isLoggedIn={this.state.isLoggedIn} drawer={this.state.isOpen} toggleDrawer={this.toggleDrawer}/>
    
    <div className="App">
      
     
    <header className="App-header">
    <div onClick={this.toggleDrawer(true)}> 
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
      </div>   

      <div className="nav-login" onClick={this.redirectToSignin}>
       <LoginButton />
      </div>
         
    </header>
    
      
      <Switch>
          <Route exact path='/' render = {(props) => <FrontPage {...props} isLoggedIn={this.state.isLoggedIn}/>}/>
          <Route exact path='/home' render = {(props) => <FrontPage {...props} isLoggedIn={this.state.isLoggedIn}/>}/>
          <Route exact path='/signin' render = {(props) => <SignIn {...props} login={this.handleLoginLogout}/>}/>
          <Route exact path='/signup' render = {(props) => <SignUp {...props} isLoggedIn={this.state.isLoggedIn}/>}/>
          <Route exact path='/dashboard' render = {(props) => <Dashboard {...props} isLoggedIn={this.state.isLoggedIn}/>}/>
          <Route exact path='/product' render = {(props) => <Product {...props} />}/>
          <Route exact path='/cover' render = {(props) => <Cover {...props} />}/>
          <Route exact path='/covers' render = {(props) => <Covers {...props} />}/>
          <Route exact path='/claim' render = {(props) => <Claim {...props} />}/>
          <Route exact path='/about' render = {(props) => <WhoAreWe {...props} />}/>
          <Route exact path='/info' render = {(props) => <EverythingYouNeedToKnow {...props} />}/>
          <Route exact path='/rates' render = {(props) => <Rates {...props} />}/>
          <Route exact path='/quotation' render = {(props) => <Quotation {...props} />}/>
          <Route exact path='/payment-options' render = {(props) => <PaymentOptions {...props} />} />
          <Route exact path='/mpesa' render = {(props) => <Mpesa {...props} />}/>
      </Switch>
      
        
     
    </div>
    <div>
        <FooterMenu/>
    </div>
    <div>
        <SocialMedia/>
    </div>  
    <Footer/>
    </Router>
  );
  }
}

export default  App;
