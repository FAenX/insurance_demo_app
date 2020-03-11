import React, { useEffect, useState } from "react"
import {ProvidersCarousel, ProvidersCarouselLong} from "./components/ProvidersCarousel"
import apa from "../../assets/images/apa.png";
import jubilee from "../../assets/images/partners-jubilee.png"
import heritage from "../../assets/images/partners-heritage.png";

//import  from "../assets/images/apa.png";

const Partners =props=>{
    const [positionY, setPositionY] = useState(0)
    useEffect(()=>{
        // console.log(positionY)
        window.addEventListener("scroll", scrollListener)
    })
    const scrollListener =()=>{
        
        const {scrollTop, clientHeight } = document.documentElement
        // console.log((scrollTop/clientHeight)*100)
        // console.log(scrollTop)
        setPositionY(scrollTop)
    }
   
    const partnersStyle={
        // width: "60%",
        // height: "40vh",
    }
    const imgStyle={
        height: "75px",
        width: "150px",
        margin: ".5em"
    }
    return(
        <div style={partnersStyle}>
            <img style={imgStyle} src={apa} alt=""/>
            <img style={imgStyle} src={apa} alt=""/>
            <img style={imgStyle} src={heritage} alt=""/>
            <img style={imgStyle} src={jubilee} alt=""/>
            <img style={imgStyle} src={apa} alt=""/>
            <img style={imgStyle} src={apa} alt=""/>
        </div>
    )
}

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
                
                <Partners />
               
                       
            </div> 
        )
    }
}

export default OurPatners;