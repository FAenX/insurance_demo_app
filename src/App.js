import React, {useEffect, useState} from 'react';
import './App.scss';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import dotenv from "dotenv";
import Site from "./site/Site"
import "./Components.scss"
import imgPlaceholder from "./assets/images/img_placeholder.png";
import clsx from 'clsx';

dotenv.config()


const App =()=> {
    const [loading, setLoading] = useState(false)

  //handle logout
 
 useEffect(()=>{
    
    const subCategories = JSON.parse(sessionStorage.getItem("sub_categories"))
    const products = JSON.parse(sessionStorage.getItem("products"))
    if (subCategories==null || products==null)
    {
      setLoading(true)
      fetchProductsAndSubCategories()
    }
  }, [])
  // init session
  const fetchProductsAndSubCategories=async ()=>{
    const subCategories= await fetch("/api/v1/products/sub-categories/", {method: "GET"})
    const products = await fetch("/api/v1/products/", {method: "GET"})
    const subs = await subCategories.json()
    const prods = await products.json()
    sessionStorage.setItem("sub_categories", JSON.stringify(subs))
    sessionStorage.setItem("products", JSON.stringify(prods))    
    setLoading(false)
  }

  
  const products = JSON.parse(sessionStorage.getItem("products"))
  const toggleLoading=(props)=>{
    if( products && products.length > 0)
    {
     return (<div  className="main">       
                <Router>
                      <Route exact path='/*' render = {(props) => <Site {...props}/>}/>
                </Router>
              </div>
     )
    }
    return  (<div className={clsx("loader",{
                  "display-none": loading
                })}>
                <img alt="logo" src={imgPlaceholder}/>
                <div className="loading-text">Loading....</div>
                <div className="loading-text">Name Insurance</div>
              </div>
    )
  }
   

    return (
      <div className="App">
        {toggleLoading()}
      </div>
    );
}

export default  App;



