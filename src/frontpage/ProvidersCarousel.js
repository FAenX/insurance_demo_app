import React from "react";
import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from 'react-responsive-carousel';



 
class ProvidersCarousel extends React.Component {
    render() {
        return (
            <Carousel 
                className="providers-carousel" 
                infiniteLoop 
                autoPlay 
                transitionTime={1800}
                swipeable={true}
                showIndicators={false}
                showThumbs={false}
                showArrows={false}
                showStatus={false}
                width="70vw"
            >
                
                <div className="provider">
                    <img alt="" src={this.props.jubilee}/>                
                </div>

                <div className="provider">
                    <img alt="" src={this.props.heritage}/>                
                </div>

                <div className="provider">
                    <img alt="" src={this.props.apa}/>                
                </div>
                
            </Carousel>
        );
    }
};
 
export default ProvidersCarousel;