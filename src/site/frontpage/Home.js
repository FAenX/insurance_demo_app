import React from "react"
import {withRouter } from "react-router-dom";
import {HomeCarousel1} from "./HomeCarousel"
import "./Home.scss"





const Home =()=>{
    const homeStyle={
        width: "100vw",
        height: "100vh",
        position: "relative",
        top: "10vh"
    }

    const headlineStyle={
        fontSize: "1.5em",
        color: "#fff",
        width: "80%"
    }

    return(
        <div style={homeStyle} className="home">
            <div className="headline-text">
                <div style={headlineStyle}>
                    Buy Motor Vehicle Insurance directly from the comfort of your Vehicle
                </div>
                
                <HomeCarousel1 /> 
            </div>
        </div>
    )
   
}

export default withRouter(Home);