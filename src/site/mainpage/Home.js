import React from "react"
import {HomeCarousel} from "./HomeCarousel"
import "./Home.scss"

const Home =(props)=>{
   
    const homeStyleWide={
        width: "100vw",
        height: "100vh",
    }

    const homeStyleMin={
        display: "flex", 
        flexFlow: "row",
        width: "100vw",
    }

    const headlineStyleWide={
        width: "80%",
        color: "#fff",
    }

    const headlineStyleMin={
        color: "#fff",
        width: "80%",
        textAlign: "left"
    }
    const homeStyle=()=>{if(props.page==="home"){return homeStyleWide}return homeStyleMin}
    const headlineStyle=()=>{if(props.page==="home"){return headlineStyleWide}return headlineStyleMin}

    return(
        <div style={homeStyle()} className="home">
            <div className="headline">
                <div style={headlineStyle()} className="headline-text">
                    <div>Name Insurance Brokers </div>
                    <div style={{fontSize: ".5em"}}>Your most trusted name in Insurance</div>
                </div>
                
                <HomeCarousel page={props.page}/> 
            </div>
        </div>
    )
   
}

export default Home;