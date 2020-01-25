import React from "react"
import {withRouter } from "react-router-dom";
import {HomeCarousel1, HomeCarousel2} from "./HomeCarousel"


class Home extends React.Component{
   
    render(){
        return(
            <div className="home">
                <div className="headline-text sliding-effect">
                     Buy Motor Vehicle Insurance directly from your Phone
                   
                </div>
                <div className="headline-subtext">
                <HomeCarousel1 />  
                <HomeCarousel2 />  
                            
                </div>
                
                
            </div>
        )
    }
}

export default withRouter(Home);