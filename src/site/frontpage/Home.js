import React from "react"
import {withRouter } from "react-router-dom";
import {HomeCarousel1, HomeCarousel2} from "./HomeCarousel"


class Home extends React.Component{
   
    render(){
        return(
            <div className="home">
                <div className="headline-text">
                    <div className="">
                        Buy Motor Vehicle Insurance directly from the comfort of your Vehicle
                    </div>
                    
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