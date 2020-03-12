import React, { useState, useEffect } from "react";
import Home from "./Home"
import HowItWorks from './HowItWorks'
import OurPatners from "./OurPartners"
import WhyUs from "./WhyUs"
import "./MainPage.scss"
import MainNavigation from "../components/MainNavigation" 
import Contacts from "../contacts/Contacts"
import QuotationForm from "../../components/MotorInsuranceQuoteForm"
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import {Snackbar} from "@material-ui/core"
import Quotation from "../insurance/Quotation"
import Dashboard from "../auth/dashboard/Dashboard"


const MainPage =()=> {
    const[page, setPage]=useState("home")
    const[user, setUser]=useState(null)
    const[loginAlert, setAlert] = useState(false)

    useEffect(()=>{
        const savedUser = JSON.parse(sessionStorage.getItem("user"))
        if(savedUser!==null){
            setUser(savedUser)
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
     

    const redirect=args=>{
        setPage(args)
    }

    const content = props=> {
        if(page === "home"){
        return  <>
                    <HowItWorks/>  
                    <WhyUs />
                    <OurPatners/>
                </>
        }else if(page === "quotation"){
            return <QuotationForm redirect={redirect}/>
        }else if(page === "signin"){
            return <SignIn loginListener={loginListener} loginRedirect={redirect}/>
        }else if(page === "signup"){
            return <SignUp signUpListener={signUpListener} signUpRedirect={redirect}/>
        }else if(page === "quotation-response"){
            return <Quotation />
        }else if(page==="dashboard"){
            return <Dashboard redirect={redirect}/>
        }
    }

    const coverHeight=()=>{
        if (page==="home"){return "100vh"}
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
            <div className="cover-page" style={coverStyle}>
                <MainNavigation  
                    navigate={redirect} 
                    user={user} 
                    onSignOut={()=>{setUser(null)}}
                />
                   {alert()}    
                <Home page={page}/>
               
            </div>
                {content()}

                <Contacts />
            
        </div>
    )

}
export default MainPage