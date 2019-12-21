import React from 'react';
import './App.css';
import Rates from "./Rates"
import Quotation from "./Quotation"
import PaymentOptions from "./PaymentOptions"
import Mpesa from "./Mpesa"
import Covers from "./Covers";
import FrontPage from "./frontPage";
import {Navbar} from "react-bootstrap";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import dotenv from "dotenv"
dotenv.config()


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      chosenProduct: null,
      quotation: "",
      chosenPaymentOption: ""
    }
  }
  
  componentDidMount() {
    this.setState({
      chosenProduct: null
    })
    
  }

  handleChosenProduct = (data)=>{
    console.log(data)
    this.setState({
      chosenProduct: data,
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

  render(){
  return (
    <Router>
    <header className="App-header">
    
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          React Bootstrap
        </Navbar.Brand>
      </Navbar>
   
    </header>
    <div className="App">
     
      <Switch>
      <Route exact path='/' render = {(props) => <FrontPage {...props} />}/>
          <Route exact path='/covers' render = {(props) => <Covers {...props} chosenProduct={this.handleChosenProduct}/>}/>
          <Route exact path='/rates' render = {(props) => <Rates {...props} chosenProduct= {this.state.chosenProduct} handleRequest={this.handleQuotationRequest}/>}/>
          <Route exact path='/quotation' render = {(props) => <Quotation {...props} data={this.state}/>}/>
          <Route exact path='/payment-options' render = {(props) => <PaymentOptions {...props} data={this.state} paymentOption={this.handlePayment}/>} />
          <Route exact path='/mpesa' render = {(props) => <Mpesa {...props} data={this.state} />}/>
      </Switch>
      
        
     
    </div>
    </Router>
  );
  }
}

export default  App;
