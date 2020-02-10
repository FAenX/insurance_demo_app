import React from 'react';
import './Site.scss';
import Quotation from "./covers/Quotation";
import PaymentOptions from "./payments/PaymentOptions";
import Mpesa from "./payments/Mpesa"
import Covers from "./covers/Covers";
import FrontPage from "./frontpage/frontPage";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Claim from "./claims/Claim";
import WhoAreWe from "./whoarewe/WhoAreWe";
import dotenv from "dotenv";
import imgPlaceholder from "../assets/images/img_placeholder.png";
import Footer from "../components/Footer";
import Contacts from "./contacts/Contacts";
import clsx from 'clsx';
import DesktopMenu from "./components/DesktopMenu"
import MobileNavigation from "./components/MobileNavigation"



dotenv.config()


class Site extends React.Component {
  constructor(props){
    super(props);
    this.state = {  
      isOpen: false,
      isOpenMobile: false

    }
   
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
    this.setState({ isOpenMobile: open });
  };

  render(){
    return (
      <div className="App">
        {/* <div className={clsx("loader",{
            "display-none": !this.state.loading
          })}>
          <img alt="logo" src={imgPlaceholder}/>
          <div className="loading-text">Loading....</div>
          <div className="loading-text">Name Insurance</div>
        </div> */}
        <Router>            
              
            <MobileNavigation 
            
            />
            <DesktopMenu 
              
            />
       
        <div 
          className={clsx("main",{
            "display-none": false,
            
          })}
        >
          <Switch>
              <Route exact path='/' render = {(props) => <FrontPage {...props} isLoggedIn={this.state.isLoggedIn}/>}/>
              <Route exact path='/home' render = {(props) => <FrontPage {...props} isLoggedIn={this.state.isLoggedIn}/>}/>
              <Route exact path='/covers' render = {(props) => <Covers {...props} />}/>
              <Route exact path='/claim' render = {(props) => <Claim {...props} />}/>
              <Route exact path='/about' render = {(props) => <WhoAreWe {...props} />}/>
              <Route exact path='/quotation' render = {(props) => <Quotation {...props} />}/>
              <Route exact path='/payment-options' render = {(props) => <PaymentOptions {...props} />} />
              <Route exact path='/mpesa' render = {(props) => <Mpesa {...props} />}/>
          </Switch>
        <Contacts/>
        </div>
        </Router>
        <Footer/>
       </div>
    );
  }
}

export default Site;
