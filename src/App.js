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
      loading: false,   
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
        loading: true,
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

      const subs = await subCategories.then(data=>{        
        sessionStorage.setItem("sub_categories", JSON.stringify(data))
        return data.json()
      }).catch(err=>err) 
      const prods = await products.then(data=>{        
        sessionStorage.setItem("products", JSON.stringify(data))
        return data.json()
      }).catch(err=>err)

      console.log(subs)
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
    return (
      <div className="App">
        <div className={clsx("loader",{
            "display-none": this.state.loading
          })}>
          <img alt="logo" src={imgPlaceholder}/>
          <div className="loading-text">Loading....</div>
          <div className="loading-text">Name Insurance</div>
        </div>
        <Router>
       
        <div 
          // className="main"
          className={clsx("main",{
            "display-none": !this.state.loading,
            
          })}
        >
       
        
          <Switch>
              <Route exact path='/dashboard' render = {(props) => <Dashboard {...props} isLoggedIn={this.state.isLoggedIn}/>}/>
              <Route exact path='/*' render = {(props) => <Site {...props} isLoggedIn={this.state.isLoggedIn}/>}/>
          </Switch>
        
        
        </div>
        </Router>
        <Backdrop open={this.state.backdrop}/>
       </div>
    );
  }
}

export default  App;
