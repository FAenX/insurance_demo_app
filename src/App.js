import React from 'react';
import './App.css';
import Rates from "./Rates"
import Quotation from "./Quotation"
import {Container} from "react-bootstrap";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email:"",
      premium:"",
      reg: "",
      value: "",
      cover: ""
    }
  }
  
  componentDidMount() {
    
  }

  handleQuotationRequest =(data)=>{
    console.log(data)
    this.setState({
      premium: data.premium,
      reg: data.registration,
      value: data.value,
      cover: data.cover,
      email: data.email
    })

  }

  render(){
  return (
    <Router>
    <Container fluid={true} className="App">
      <header className="App-header">Motor insurance products mini app</header>
      <Switch>
          <Route exact path='/' render = {(props) => <Rates {...props} handleRequest={this.handleQuotationRequest}/>}/>
          <Route exact path='/quotation' render = {(props) => <Quotation {...props} data={this.state}/>}/>
      </Switch>
      
        
     
    </Container>
    </Router>
  );
  }
}

export default  App;
