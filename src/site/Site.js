import React, {useState} from 'react';
import './Site.scss';
import Quotation from "./covers/Quotation";
import PaymentOptions from "./payments/PaymentOptions";
import Mpesa from "./payments/Mpesa"
import FrontPage from "./frontpage/frontPage";
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Claim from "./claims/Claim";
import WhoAreWe from "./whoarewe/WhoAreWe";
import dotenv from "dotenv";
import Footer from "../components/Footer";
import Contacts from "./contacts/Contacts";
import DesktopMenu from "./components/DesktopMenu"
import MobileNavigation from "./components/MobileNavigation"
import Dashboard from "./auth/dashboard/Dashboard";



dotenv.config()

const Site =(props)=>{
  
    return (
      <div className="App">
        <Router> 
            <MobileNavigation  />
            <DesktopMenu  />
       
              <Route exact path='/home' render = {(props) => <FrontPage {...props} />}/>
              <Route exact path='/claim' render = {(props) => <Claim {...props} />}/>
              <Route exact path='/about' render = {(props) => <WhoAreWe {...props} />}/>
              <Route exact path='/quotation' render = {(props) => <Quotation {...props} />}/>
              <Route exact path='/payment-options' render = {(props) => <PaymentOptions {...props} />} />
              <Route exact path='/mpesa' render = {(props) => <Mpesa {...props} />}/>
              <Route exact path='/dashboard' render = {(props) => <Dashboard {...props} />}/>
              <Route exact path='/*' render = {(props) => <FrontPage {...props} />}/>
         
          <Contacts/>
       
        </Router>
        <Footer/>
       </div>
    );
 
}

export default Site;
