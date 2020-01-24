import React from "react";
import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from 'react-responsive-carousel';


class DashCarousel extends React.Component {
    render() {
        return (
            <Carousel 
                className="home-carousel"
                
                infiniteLoop 
                autoPlay 
                swipeable={true}
                showIndicators={true}
                showThumbs={false}
                showArrows={true}
                showStatus={false}
                width="100%"
            >
                
                <div className="content">
                     Content
                </div>

                <div className="content">
                       Content    
                </div>

                <div className="content">
                                 
                </div>
                
            </Carousel>
        );
    }
};
 
export default DashCarousel;