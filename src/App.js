import React from 'react';
import './App.scss';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Dashboard from "./auth/dashboard/Dashboard";
import dotenv from "dotenv";
import Backdrop from "./components/BackDrop";
import Site from "./site/Site"
import "./Components.scss"
import imgPlaceholder from "./assets/images/img_placeholder.png";
import clsx from 'clsx';

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

      const subs = await subCategories.then(data=>{        
        
        return data.json()
      }).catch(err=>err) 
      const prods = await products.then(data=>{        
       
        return data.json()
      }).catch(err=>err)

      sessionStorage.setItem("sub_categories", JSON.stringify(subs))
      sessionStorage.setItem("products", JSON.stringify(prods))
      console.log(prods)
     
      this.setState({
        backdrop:false,
        loading: false,
    })
     
    }

   
  //handle logout
  handleLoginLogout =()=>{
    this.setState({
      isLoggedIn: false
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
    let site; 
    if (this.state.loading){
        site =  <Backdrop open={this.state.loading}/> 
    }else{
      site = <div 
                className="main"
              >       
                <Router>
                  <Switch>
                      <Route exact path='/dashboard' render = {(props) => <Dashboard {...props} isLoggedIn={this.state.isLoggedIn}/>}/>
                      <Route exact path='/*' render = {(props) => <Site {...props} isLoggedIn={this.state.isLoggedIn}/>}/>
                  </Switch>
                </Router>
              </div>
    }

    return (
      <div className="App">
        <div className={clsx("loader",{
            "display-none": !this.state.loading
          })}>
          <img alt="logo" src={imgPlaceholder}/>
          <div className="loading-text">Loading....</div>
          <div className="loading-text">Name Insurance</div>
        </div>
       
       {site}
        
        
        
       </div>
    );
  }
}

export default  App;



