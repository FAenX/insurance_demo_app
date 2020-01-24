import React from "react"
import {withRouter } from "react-router-dom";
import HomeCarousel from "./HomeCarousel"


class Home extends React.Component{
   
    render(){
        return(
            <div className="home">
                <div className="headline-text">
                     Buy Motor Vehicle Insurance directly from your Phone
                   
                </div>
                <div className="headline-subtext">
                <HomeCarousel />                
                </div>
                
                
            </div>
        )
    }
}

export default withRouter(Home);