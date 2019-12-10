import React from 'react';
import './App.css';
import Rates from "./Rates"
import Quotation from "./Quotation"
import PaymentOptions from "./PaymentOptions"
import Mpesa from "./Mpesa"
import {Container} from "react-bootstrap";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
     quotation: "",
     chosenPaymentOption: ""
    }
  }
  
  componentDidMount() {
    
  }

  handleQuotationRequest =(data)=>{
    console.log(data)
    this.setState({
      quotation: data,
    })

  }

  handlePayment = (data) => {
    console.log(data)
    this.setState({
      chosenPaymentOption: data.paymentOption
    })

  }

  render(){
  return (
    <Router>
    <header className="App-header">Motor insurance products mini app</header>
    <Container className="App">
     
      <Switch>
          <Route exact path='/' render = {(props) => <Rates {...props} handleRequest={this.handleQuotationRequest}/>}/>
          <Route exact path='/quotation' render = {(props) => <Quotation {...props} data={this.state}/>}/>
          <Route exact path='/payment-options' render = {(props) => <PaymentOptions {...props} data={this.state} paymentOption={this.handlePayment}/>} />
          <Route exact path='/mpesa' render = {(props) => <Mpesa {...props} data={this.state} />}/>
      </Switch>
      
        
     
    </Container>
    </Router>
  );
  }
}

export default  App;
