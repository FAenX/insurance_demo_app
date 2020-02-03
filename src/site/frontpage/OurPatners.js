import React from "react"
import {ProvidersCarousel, ProvidersCarouselLong} from "./ProvidersCarousel"
import apa from "../../assets/images/apa.png";
import jubilee from "../../assets/images/partners-jubilee.png"
import heritage from "../../assets/images/partners-heritage.png";
//import  from "../assets/images/apa.png";


class OurPatners extends React.Component{
    constructor(props){
        super(props)
        this.state={
            providers: ""

        }

        this.fetchProviders=this.fetchProviders.bind(this)
    }

    async fetchProviders(){
        const data = fetch("/api/v1/products/providers/", {
            method: "GET",
            
        }).then(res=>res.json())
        .catch((err)=>{
            console.log(err)
        })

        const response = await data.then(res=>{            
                    this.setState({
                        providers: res
                    });
           return res
        })

        console.log(response)
    }

    componentDidMount = ()=>{
        this.fetchProviders()
    }
    
    render(){
        
        return(
            <div className="providers-wrapper">
                <div className="providers-headline">
                    <div className="providers-heading">Our Insurance Patners</div>
                    <div className="providers-sub-heading">With over 12 insurers to choose from, Name works actively to find an ideal plan for you</div>
                </div>
                
                <ProvidersCarouselLong 
                    providers={this.state.providers}
                    heritage={heritage}
                    apa={apa}
                    jubilee={jubilee}
                />
                <ProvidersCarousel 
                    providers={this.state.providers}
                    heritage={heritage}
                    apa={apa}
                    jubilee={jubilee}
                />
               
                       
            </div> 
        )
    }
}

export default OurPatners;