import React from 'react';
import './App.scss';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Dashboard from "./auth/dashboard/Dashboard";
import dotenv from "dotenv";
import imgPlaceholder from "./assets/images/img_placeholder.png";
import Backdrop from "./components/BackDrop";
import Footer from "./components/Footer";
import clsx from 'clsx';
import Site from "./site/Site"
import "./Components.scss"

dotenv.config()


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {  
      //loader
      loading: true,   
      //drawer
      isOpen: false,
      isLoggedIn: false,
      //backdrop
      backdrop: false
    }
    this.fetchProductsAndSubCategories=this.fetchProductsAndSubCategories.bind(this)
  }

  componentDidMount=()=>{
    setTimeout(()=>{
      this.setState({
        loading: false
      })
    }, 5000)
    this.subCategories = JSON.parse(sessionStorage.getItem("sub_categories"))
    this.products = JSON.parse(sessionStorage.getItem("products"))
    if (
      this.subCategories!==null && 
      this.subCategories !== undefined && 
      this.subCategories.length > 0 &&
      this.products!==null && 
      this.products !== undefined && 
      this.products.length > 0
      ){
      //
    }else{
      this.fetchProductsAndSubCategories()
    }
  }

  
    // init session
    async fetchProductsAndSubCategories (){
      this.setState({
        backdrop:true,
    })
     
     
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
      this.setState({
        backdrop:false,
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
      <div className="App">
        <div className={clsx("loader",{
            "display-none": !this.state.loading
          })}>
          <img alt="logo" src={imgPlaceholder}/>
          <div className="loading-text">Loading....</div>
          <div className="loading-text">Name Insurance</div>
        </div>
        <Router>
       
        <div 
          className={clsx("main",{
            "display-none": this.state.loading,
            
          })}
        >
       
        
          <Switch>
              <Route exact path='/' render = {(props) => <Site {...props} isLoggedIn={this.state.isLoggedIn}/>}/>
              <Route exact path='/home' render = {(props) => <Site {...props} isLoggedIn={this.state.isLoggedIn}/>}/>
              <Route exact path='/dashboard' render = {(props) => <Dashboard {...props} isLoggedIn={this.state.isLoggedIn}/>}/>
          </Switch>
        <Footer/>
        
        </div>
        </Router>
        <Backdrop open={this.state.backdrop}/>
       </div>
    );
  }
}

export default  App;
