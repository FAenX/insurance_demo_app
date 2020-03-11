import React from "react";
import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from 'react-responsive-carousel';
import "./HomeCarousel.scss"
import cslx from "clsx"


export function HomeCarousel(props) {
   
        return (
            <Carousel 
                className={cslx("home-carousel home-carousel1 sliding-effect8s",{
                    "display-none": props.page !== "home"
                })}
                
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
    
};

