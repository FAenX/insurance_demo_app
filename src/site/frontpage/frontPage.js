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


const MainPage =()=> {
    const[page, setPage]=useState("home")

    const navigate =props=>{
        setPage(props) 
    }

    const content = props=> {
        if(page === "home"){
        return  <>
                    <HowItWorks/>  
                    <WhyUs />
                    <OurPatners/>
                </>
        }else if(page === "quotation"){
            return <QuotationForm />
        }else if(page === "about"){
            // return 
        }else if(page === "signin"){
            return <SignIn />
        }else if(page === "signup"){
            return <SignUp />
        }
    }

    const coverHeight=()=>{
        if (page==="home"){return "100vh"}
        return "30vh"
    }

    const coverStyle={
        height: coverHeight()
    }

    return(
        <div className="front-page">
            <div className="cover-page" style={coverStyle}>
                <DesktopMenu  navigate={navigate}/>               
                <Home page={page}/>
               
            </div>
                {content()}

                <Contacts />
            
        </div>
    )

}
export default MainPage