import React from "react";
import Provider from "../Provider"
import "react-responsive-carousel/lib/styles/carousel.css";
import "./carousel.scss"
import { Carousel } from 'react-responsive-carousel';


//should be dynamic
import Jubilee from "../../assets/images/jubilee.png"
import Apa from "../../assets/images/apa.png"
import Heritage from "../../assets/images/partners-heritage.png"


class ProvidersCarousel extends React.Component {
    render() {
        return (
            <Carousel 
                className="providers-carousel" 
                infiniteLoop 
                transitionTime={1000}
                swipeable={true}
                showIndicators={true}
                showThumbs={false}
                showArrows={true}
                showStatus={true}
                width="100%"
            >
                
                <div className="provider">
                    <Provider 
                        chosenProduct={this.props.chosenProduct} 
                        premium={this.props.premium}
                        image = {Jubilee}
                    />             
                </div>

                <div className="provider">
                    <Provider 
                        chosenProduct={this.props.chosenProduct} 
                        premium={this.props.premium}
                        image = {Apa}
                    />               
                </div>

                <div className="provider">
                    <Provider 
                        chosenProduct={this.props.chosenProduct} 
                        premium={this.props.premium}
                        image={Heritage}
                    />                    
                </div>
                
            </Carousel>
        );
    }
};

export default ProvidersCarousel;

