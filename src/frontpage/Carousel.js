import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import provider from "../assets/images/apa.png";
 
class DemoCarousel extends React.Component {
    render() {
        return (
            <Carousel infiniteLoop autoPlay swipeable={true}>
                
                <div className="provider">
                <img alt="" src={provider}/>
                
                </div>
                <div className="provider">
                <img alt="" src={provider}/>
                
                </div>
                <div className="provider">
                <img alt="" src={provider}/>
                
                </div>
                <div className="provider">
                <img alt="" src={provider}/>
                
                </div>
                <div className="provider">
                <img alt="" src={provider}/>
                
                </div>
            </Carousel>
        );
    }
};
 
export default DemoCarousel;