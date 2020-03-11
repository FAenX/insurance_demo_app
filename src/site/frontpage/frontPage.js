import React, { useState } from "react";
import Home from "./Home"
import HowItWorks from './HowItWorks'
import OurPatners from "./OurPatners"
import WhyUs from "./WhyUs"
import "./FrontPage.scss"
import DesktopMenu from "../components/DesktopMenu" 
import Contacts from "../contacts/Contacts"
import QuotationForm from "../../components/MotorInsuranceQuoteForm"
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import {Snackbar} from "@material-ui/core"
import Quotation from "../insurance/Quotation"


const MainPage =()=> {
    const[page, setPage]=useState("home")
    const[user, setUser]=useState(true)
    const[loginAlert, setAlert] = useState(false)

    const navigate =props=>{
        setPage(props) 
    }

    const loginListener=response=>{
        console.log(response)
        console.log(typeof(response))
        if (typeof(response)==="number"){
            
            return
        }
        sessionStorage.setItem("tokens", JSON.stringify(response))
        setUser(true)
        setAlert(true)

    }

    const signUpListener=response=>{
        console.log(response)
        console.log(typeof(response))
        if (typeof(response)==="number"){
            
            return
        }
        sessionStorage.setItem("tokens", JSON.stringify(response))
        setUser(true)
        setAlert(true)

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
        }else if(page === "about"){
            // return 
        }else if(page === "signin"){
            return <SignIn loginListener={loginListener} loginRedirect={redirect}/>
        }else if(page === "signup"){
            return <SignUp signUpListener={signUpListener} signUpRedirect={redirect}/>
        }else if(page === "quotation-response"){
            return <Quotation />
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
                <DesktopMenu  navigate={navigate}/>
                   {alert()}    
                <Home page={page}/>
               
            </div>
                {content()}

                <Contacts />
            
        </div>
    )

}
export default MainPage