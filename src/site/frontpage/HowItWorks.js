import React, {useEffect, useState} from "react"
import imgPlaceholder from "../../assets/images/img_placeholder.png"
import "./HowItWorks.scss"
import clsx from "clsx"


const HowItWorksStep =props=>{
    const [positionY, setPositionY] = useState(0)
    useEffect(()=>{
        window.addEventListener("scroll", watchScrolling);
    })

    const watchScrolling = () => {
        const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
        const winScroll = document.body.scrollTop || scrollTop;
        const winHeight = scrollHeight - clientHeight;
        const scrolled = (winScroll / winHeight) * 100;
        setPositionY(scrolled)
    };

   const transition={
        transition: "width .25s, height .25s"
   }

   
    return(
        <div style={transition} className={clsx("step",{"stepMax": positionY>16})}>
                <div style={transition} className="svg">
                    <img  style={transition} alt="" src={props.img}/> 
                </div>
                <div className="step-text-wrapper">
                    <div className="step-header">{props.title}</div>
                    <div className="step-text"> {props.text} </div>
                </div>
        </div>
    )
 
}

const Steps=()=>{
    const data = {
        "browse":"Occaecati aut in dolores. Fugit nihil sunt quia quia et vitae earum. Sed odio eum quae maxime nostrum excepturi cupiditate porro. Excepturi ut repudiandae optio ducimus sint odit aspernatur.",
        "request quotation": "Occaecati aut in dolores. Fugit nihil sunt quia quia et vitae earum. Sed odio eum quae maxime nostrum excepturi cupiditate porro. Excepturi ut repudiandae optio ducimus sint odit aspernatur.",
        "make payment": "Occaecati aut in dolores. Fugit nihil sunt quia quia et vitae earum. Sed odio eum quae maxime nostrum excepturi cupiditate porro. Excepturi ut repudiandae optio ducimus sint odit aspernatur.",
    }
    
    return (
        Object.keys(data).map(i=>{
            return <HowItWorksStep 
                        key={i} 
                        text={data[i]} 
                        title={i} 
                        img={imgPlaceholder} 
                    />
        })
    )           
}

const HowItWorks =()=>{
   const headerStyle={
        fontSize: "2.5em",
        margin: ".5em",
        fontWeight: "600",
        textTransform: "capitalize",
        width: "400px",
        height: "50px"
   }
    return(
        <div className="page-wrapper">
            <div style={headerStyle} className="page-header">
                How does it work?
            </div>
                <div className="how-it-works"> 
                    <Steps />
                </div>
            </div>
            
        
    )
  
}

export default HowItWorks;


