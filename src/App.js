import React from 'react';
import './App.scss';
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
import Product from './covers/Product';
import Claim from "./claims/Claim"
import WhoAreWe from "./whoarewe/WhoAreWe"
import EverythingYouNeedToKnow from "./everythingYouNeedToKnow/everythingYouNeedToKnow"
import dotenv from "dotenv"
import LoginButton from "./LoginButton"
import imgPlaceholder from "./assets/images/img_placeholder.png"
import Contacts from "./Contacts"
import {Paper} from "@material-ui/core"



dotenv.config()


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
     
      //drawer
      isOpen: false,
      isLoggedIn: false,

      //backdrop
      open: false
    }
    this.fetchProductsAndSubCategories=this.fetchProductsAndSubCategories.bind(this)
  }

  
    // init session
    async fetchProductsAndSubCategories (){
     
      const subCategories= fetch("/api/v1/products/sub-categories/", {
        method: "GET",   
                      
        }).then(res=>res)
        .catch((err)=>{
            console.log(err)
        })

      const products = fetch("/api/v1/products/", {
          method: "GET", 
          }).then((res)=>res)
          .catch((err)=>{
              console.log(err)
          })  

      const subs = await subCategories.then(data=>data.json()).catch(err=>err) 
      const prods = await products.then(data=>data.json()).catch(err=>err)

      sessionStorage.setItem("products", JSON.stringify(prods))
      sessionStorage.setItem("sub_categories", JSON.stringify(subs))
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
    let subCategories = JSON.parse(sessionStorage.getItem("sub_categories"))
    let products = JSON.parse(sessionStorage.getItem("products"))
    if (
      subCategories!==null && 
      subCategories !== undefined && 
      subCategories.length > 0 &&
      products!==null && 
      products !== undefined && 
      products.length > 0
      ){
      //
    }else{
      this.fetchProductsAndSubCategories()
    }

  return (
    <Router>
      <SideNav 
        isLoggedIn={this.state.isLoggedIn} 
        drawer={this.state.isOpen} 
        toggleDrawer={this.toggleDrawer}
      />
      <div className="App">
        <Paper variant="elevation" elevation={5} className="top-nav">
          <header className="App-header">
            <div className="menu-icon" onClick={this.toggleDrawer(true)}> 
              <IconButton >
                <MenuIcon />
              </IconButton>
            </div> 
            <div className="logo">
              <img alt="logo" src={imgPlaceholder}/>
            </div>
            <div className="nav-login" onClick={this.redirectToSignin}>
            <LoginButton />
            </div>
          </header>
        </Paper>
      
        <Switch>
            <Route exact path='/' render = {(props) => <FrontPage {...props} isLoggedIn={this.state.isLoggedIn}/>}/>
            <Route exact path='/home' render = {(props) => <FrontPage {...props} isLoggedIn={this.state.isLoggedIn}/>}/>
            <Route exact path='/signin' render = {(props) => <SignIn {...props} login={this.handleLoginLogout}/>}/>
            <Route exact path='/signup' render = {(props) => <SignUp {...props} isLoggedIn={this.state.isLoggedIn}/>}/>
            <Route exact path='/dashboard' render = {(props) => <Dashboard {...props} isLoggedIn={this.state.isLoggedIn}/>}/>
            <Route exact path='/product' render = {(props) => <Product {...props} />}/>
            <Route exact path='/cover' render = {(props) => <Cover {...props} />}/>
            <Route exact path='/covers' render = {(props) => <Covers {...props} subCategories={this.state.subCategories}/>}/>
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
      </div>
      <Contacts/>
      <Footer/>
    </Router>
  );
  }
}

export default  App;
