import React from "react"
import {withRouter} from "react-router-dom";
import imgPlaceholder from "../../assets/images/img_placeholder.png"
import "./HowItWorks.scss"

const data = {
    "browse":"Occaecati aut in dolores. Fugit nihil sunt quia quia et vitae earum. Sed odio eum quae maxime nostrum excepturi cupiditate porro. Excepturi ut repudiandae optio ducimus sint odit aspernatur.",
    "request quotation": "Occaecati aut in dolores. Fugit nihil sunt quia quia et vitae earum. Sed odio eum quae maxime nostrum excepturi cupiditate porro. Excepturi ut repudiandae optio ducimus sint odit aspernatur.",
    "make payment": "Occaecati aut in dolores. Fugit nihil sunt quia quia et vitae earum. Sed odio eum quae maxime nostrum excepturi cupiditate porro. Excepturi ut repudiandae optio ducimus sint odit aspernatur.",
}

const HowItWorksStep =props=>{
    return(
        <div className="step">
                <div className="svg"><img alt="" src={props.img}/> </div>
                <div className="step-text-wrapper">
                    <div className="step-header">{props.title}</div>
                    <div className="step-text"> {props.text} </div>
                </div>
        </div>
    )
 
}

const HowItWorks =()=>{
   const headerStyle={
       fontSize: "2.5em",
       margin: ".5em",
       fontWeight: "600",
       textTransform: "capitalize",
   }
    return(
        <div className="page-wrapper">
            <div style={headerStyle} className="page-header">
                How does it work?
            </div>
                <div className="how-it-works"> 
                    {
                        Object.keys(data).map(i=>{
                            return <HowItWorksStep 
                                        key={i} 
                                        text={data[i]} 
                                        title={i} 
                                        img={imgPlaceholder} 
                                    />
                        })
                    }              
                </div>
            </div>
            
        
    )
  
}

export default withRouter(HowItWorks);


