import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import provider from "../assets/images/apa.png";
 
class DemoCarousel extends React.Component {
    render() {
        return (
            <Carousel width="100vw" infiniteLoop autoPlay swipeable={false}>
                
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