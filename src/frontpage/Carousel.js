import React from "react";
import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from 'react-responsive-carousel';
import provider from "../assets/images/apa.png";
import Jubilee from "../assets/images/jubilee.png"

 
class ProvidersCarousel extends React.Component {
    render() {
        return (
            <Carousel infiniteLoop autoPlay swipeable={true}>
                
                <div className="provider">
                <img alt="" src={provider}/>
                
                </div>
                <div className="provider">
                <img alt="" src={Jubilee}/>
                
                </div>
                
            </Carousel>
        );
    }
};
 
export default ProvidersCarousel;