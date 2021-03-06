import React, { useState, useEffect } from "react";
import Home from "./Home"
import HowItWorks from './HowItWorks'
import OurPatners from "./OurPartners"
import WhyUs from "./WhyUs"
import "./MainPage.scss"
import MainNavigation from "../components/MainNavigation" 
import Contacts from "../contacts/Contacts"
import QuotationForm from "../insurance/MotorInsuranceQuoteForm"
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import {Snackbar} from "@material-ui/core"
import Quotation from "../insurance/Quotation"
import Dashboard from "../auth/dashboard/Dashboard"
import {BrowserRouter as Router, useHistory, Switch, Route} from "react-router-dom"


const MainPage =()=> {
    const[page, setPage]=useState("home")
    const[user, setUser]=useState(null)
    const[loginAlert, setAlert] = useState(false)

    useEffect(()=>{
        const savedUser = JSON.parse(sessionStorage.getItem("user"))
        if(savedUser!==null){
            setUser(savedUser)
        }
        const getLocation = (href)=> {
            var l = document.createElement("a");
            l.href = href;
            return l;
        };
        const l = getLocation(window.location.href);
        console.log(l.pathname)
        if (l.pathname==="/home" || l.pathname==="/")
        {
            setPage("home")
        }else{
            setPage(false)
        }
    }, [])

    const loginListener=response=>{
        console.log(response)
        console.log(typeof(response))
        if (typeof(response)==="number"){
            return
        }
        sessionStorage.setItem("tokens", JSON.stringify(response))
        fetchUser(response)
    }

    const signUpListener=response=>{
        if (typeof(response)==="number"){
            return
        }
        sessionStorage.setItem("tokens", JSON.stringify(response))
        setUser(response)
        setAlert(true)

    }

    const fetchUser=async(tokens)=>{
        if(tokens !== null){
            
            const request = await fetch("/api/v1/users/profile/", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${tokens.access}`
                    },
            })
            if (request.status !== 401){
                const response = await request.json()
                setUser(response)
                sessionStorage.setItem("user", JSON.stringify(response))
            }else if(request.status === 401){
                
            }
        }
    }
     

    const setpage=args=>{
        setPage(args)
    }

    const MainContent=props=>{
        return(
            <>
                <HowItWorks/>  
                <WhyUs />
                <OurPatners/>
            </>
        )
    }

    const Content = props=> {
        const history = useHistory()
        return(
       
            <Switch>
                 <Route exact path="/">
                    <MainContent />
                </Route>
                <Route exact path="/home">
                    <MainContent />
                </Route>
                
                <Route exact path="/quotation-form">
                    <QuotationForm user={user} history={history}/> 
                </Route>
                <Route exact path="/signin">
                    <SignIn loginListener={loginListener} loginRedirect={setpage}/>
                </Route>
                <Route exact path="/signup">
                    <SignUp signUpListener={signUpListener} signUpRedirect={setpage}/>
                </Route>
                <Route exact path="/quotation">
                    <Quotation />
                </Route>
                <Route exact path="/dashboard">
                    <Dashboard redirect={setpage}/>
                </Route>
            </Switch>
        
       )
    }

    const coverHeight=()=>{
       
        const getLocation = (href)=> {
            var l = document.createElement("a");
            l.href = href;
            return l;
        };
        const l = getLocation(window.location.href);
        console.log(l.pathname)
        if (l.pathname==="/home" || l.pathname==="/" ){
            return "100vh"
        }
        return "30vh"
    }

    const coverStyle={
        height: coverHeight()
    }
    const closeSnackBar=()=>{
        setAlert(false)
    }

    const alert =props=>{
        if(loginAlert===true){
            return  <Snackbar 
                        status="success"
                        message="Login Successfull"
                        show={loginAlert}
                        onClose={closeSnackBar}
                    >
            
                    </Snackbar>
        }
    }

    return(
        <div className="front-page">
             <Router>
            <div className="cover-page" style={coverStyle}>
           
                <MainNavigation  
                    navigate={setpage} 
                    user={user} 
                    onSignOut={()=>{setUser(null)}}
                />
                   {alert()}    
                <Home page={page}/>
                    
            </div>
                <Content />

                <Contacts />
            </Router>
        </div>
    )

}
export default MainPage