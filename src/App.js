import React from 'react';
import './App.css';
import "./style.scss";
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
import dotenv from "dotenv"

dotenv.config()


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      chosenProduct: null,
      chosenSub: null,
      quotation: null,
      chosenPaymentOption: null,
      //drawer
      isOpen: false,
      isLoggedIn: false,
    }
  }
  
  componentDidMount() {
    this.setState({
      chosenProduct: null,
      isOpen: false
    })
    
  }


  //handle chose product
  handleChosenProduct = (data)=>{
    this.setState({
      chosenProduct: data,
    })
  }

  //handle chose sub-category
  handleChosenSub = (data)=>{
    this.setState({
      chosenSub: data,
    })
  }

  // handle response from quotation request
  handleQuotationRequest =(data)=>{
    console.log(data)
    this.setState({
      quotation: data,
    })

  }

  // handle chosen payment method
  handlePayment = (data) => {
    console.log(data)
    this.setState({
      chosenPaymentOption: data.paymentOption
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

  //redirect to signin
  redirectToSignin =()=>{
    this.props.history.push("/signin")
  }


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
        Sign in
      </div>
         
    </header>
    
      
      <Switch>
          <Route exact path='/' render = {(props) => <FrontPage {...props} isLoggedIn={this.state.isLoggedIn}/>}/>
          <Route exact path='/home' render = {(props) => <FrontPage {...props} isLoggedIn={this.state.isLoggedIn}/>}/>
          <Route exact path='/signin' render = {(props) => <SignIn {...props} login={this.handleLoginLogout}/>}/>
          <Route exact path='/signup' render = {(props) => <SignUp {...props} isLoggedIn={this.state.isLoggedIn}/>}/>
          <Route exact path='/dashboard' render = {(props) => <Dashboard {...props} isLoggedIn={this.state.isLoggedIn}/>}/>
          <Route exact path='/product' render = {(props) => <Product {...props} chosenSub={this.state.chosenSub}/>}/>
          <Route exact path='/cover' render = {(props) => <Cover {...props} chosenSub={this.state.chosenSub}/>}/>
          <Route exact path='/covers' render = {(props) => <Covers {...props} chooseSub={this.handleChosenSub}/>}/>
          <Route exact path='/rates' render = {(props) => <Rates {...props} chosenProduct= {this.state.chosenProduct} handleRequest={this.handleQuotationRequest}/>}/>
          <Route exact path='/quotation' render = {(props) => <Quotation {...props} data={this.state}/>}/>
          <Route exact path='/payment-options' render = {(props) => <PaymentOptions {...props} data={this.state} paymentOption={this.handlePayment}/>} />
          <Route exact path='/mpesa' render = {(props) => <Mpesa {...props} data={this.state} />}/>
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
