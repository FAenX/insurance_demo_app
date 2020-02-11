import React from "react";
import Provider from "./Provider"
import "react-responsive-carousel/lib/styles/carousel.css";
import "./carousel.scss"
import { Carousel } from 'react-responsive-carousel';


//should be dynamic
import Jubilee from "../../../assets/images/jubilee.png"
import Apa from "../../../assets/images/apa.png"
import Heritage from "../../../assets/images/partners-heritage.png"




const jp = "(+15yrs Special) Jubilee Motor"
const ap = "(+15yrs Special) APA Motor"
const hp = "(+15yrs Special) Heritage"


class ProvidersCarousel extends React.Component {
    render() {
        return (
            <Carousel 
                className="providers-carousel" 
                infiniteLoop 
                transitionTime={3000}
                swipeable={false}
                stopOnHover={true}
                swipeScrollTolerance={5}
                showIndicators={true}
                showThumbs={false}
                showArrows={true}
                showStatus={true}
                width="90vw"
            >
                
                <div className="provider">
                    <Provider 
                        chosenProduct={this.props.chosenProduct} 
                        premium={this.props.premium}
                        image = {Jubilee}
                        jp={jp}
                    /> 
                        
                </div>

                <div className="provider">
                    <Provider 
                        chosenProduct={this.props.chosenProduct} 
                        premium={this.props.premium}
                        image = {Apa}
                        jp = {ap}
                    />  
                                 
                </div>

                <div className="provider">
                    <Provider 
                        chosenProduct={this.props.chosenProduct} 
                        premium={this.props.premium}
                        image={Heritage}
                        jp = {hp}
                    />  
                                     
                </div>
                
            </Carousel>
        );
    }
};

export default ProvidersCarousel;

