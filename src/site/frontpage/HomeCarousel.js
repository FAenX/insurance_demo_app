import React from "react";
import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from 'react-responsive-carousel';
import "./HomeCarousel.scss"


export class HomeCarousel1 extends React.Component {
    render() {
        return (
            <Carousel 
                className="home-carousel home-carousel1 sliding-effect8s"
                
                infiniteLoop 
                autoPlay 
                interval={5000}
                transitionTime={1000}
                swipeable={true}
                showIndicators={true}
                showThumbs={false}
                showArrows={true}
                showStatus={false}
                width="100%"
            >
                
                <div className="home-carousel1-slide1">
                    
                     Content
                </div>

                <div className="home-carousel1-slide2">
                       Content    
                      
                </div>

                <div className="home-carousel1-slide3">
                        Content  
                               
                </div>
                
            </Carousel>
        );
    }
};

export class HomeCarousel2 extends React.Component {
    render() {
        return (
            <Carousel 
                className="home-carousel home-carousel2 sliding-effect10s"
                
                infiniteLoop 
                autoPlay 
                transitionTime={1800}
                interval={30000}
                swipeable={true}
                showIndicators={true}
                showThumbs={false}
                showArrows={true}
                showStatus={false}
                width="100%"
            >
                
                <div className="home-carousel2-slide1">
                    
                     Content
                </div>

                <div className="home-carousel2-slide2">
                       Content    
                      
                </div>

                <div className="home-carousel2-slide3">
                        Content  
                               
                </div>
                
            </Carousel>
        );
    }
};
 
