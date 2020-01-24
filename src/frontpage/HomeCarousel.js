import React from "react";
import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from 'react-responsive-carousel';



export class HomeCarousel1 extends React.Component {
    render() {
        return (
            <Carousel 
                className="home-carousel"
                
                infiniteLoop 
                autoPlay 
                interval={7200}
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
                className="home-carousel"
                
                infiniteLoop 
                autoPlay 
                interval={7200}
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
 
