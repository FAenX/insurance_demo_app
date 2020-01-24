import React from "react";
import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from 'react-responsive-carousel';
import Profile from "./Profile"
import PaymentHistory from "./PaymentHistory"
import InsuranceCovers from "./InsuranceCovers"





 
class DashCarousel extends React.Component {
    render() {
        return (
            <Carousel 
                className="dashcarousel"
                infiniteLoop 
                autoPlay 
                axis="vertical"
                swipeable={true}
                showIndicators={true}
                showThumbs={false}
                showArrows={false}
                showStatus={false}
                width="100%"
            >
                
                <div className="content">
                     <Profile />
                </div>

                <div className="content">
                      <InsuranceCovers />            
                </div>

                <div className="content">
                       <PaymentHistory />          
                </div>
                
            </Carousel>
        );
    }
};
 
export default DashCarousel;