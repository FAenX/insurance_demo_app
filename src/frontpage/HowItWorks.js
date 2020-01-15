import React from "react"
import {withRouter} from "react-router-dom";
import imgPlaceholder from "../assets/images/img_placeholder.png"
import {Button, Paper} from "@material-ui/core"


class HowItWorksStep extends React.Component{
    
    render(){
        return(
            <Paper variant="outlined" className="step">
                    <div className="svg"><img alt="" src={this.props.img}/> </div>
                    <div className="step-text-wrapper">
                        <div className="step-header">{this.props.title}</div>
                        <div className="step-text">
                       {this.props.text}
                        </div>
                    </div>
            </Paper>
        )
    }
}

class HowItWorks extends React.Component{
    constructor(props){
        super(props)
        this.state={
        }
    }
    //fetch literature and images from backend
    async fetchSteps() {
    }

    handleGetStartedButton=()=>{
        this.props.history.push("/rates")
    }

    render(){

        const data = {
            "browse":"Occaecati aut in dolores. Fugit nihil sunt quia quia et vitae earum. Sed odio eum quae maxime nostrum excepturi cupiditate porro. Excepturi ut repudiandae optio ducimus sint odit aspernatur.",
            "request quotation": "Occaecati aut in dolores. Fugit nihil sunt quia quia et vitae earum. Sed odio eum quae maxime nostrum excepturi cupiditate porro. Excepturi ut repudiandae optio ducimus sint odit aspernatur.",
            "make payment": "Occaecati aut in dolores. Fugit nihil sunt quia quia et vitae earum. Sed odio eum quae maxime nostrum excepturi cupiditate porro. Excepturi ut repudiandae optio ducimus sint odit aspernatur.",
            "download your policy and temporary sticker": "Occaecati aut in dolores. Fugit nihil sunt quia quia et vitae earum. Sed odio eum quae maxime nostrum excepturi cupiditate porro. Excepturi ut repudiandae optio ducimus sint odit aspernatur.",
            "Your sticker will be delivered to you":  "Occaecati aut in dolores. Fugit nihil sunt quia quia et vitae earum. Sed odio eum quae maxime nostrum excepturi cupiditate porro. Excepturi ut repudiandae optio ducimus sint odit aspernatur."
        }


        return(
            <div className="how-it-works-wrapper">
                <div className="how-it-works-sub-header">
                    <div className="how-it-works-sub-header-text">
                        How does it work?
                    </div>
                </div>
                <div className="how-it-works"> 
                    {
                        Object.keys(data).map(i=>{
                            return <HowItWorksStep key={i} text={data[i]} title={i} img={imgPlaceholder}/>
                        })
                    } 
                    <div className="get-started-button">
                        <Button variant="outlined" onClick={this.handleGetStartedButton}>
                            Get started
                        </Button>
                    </div>                
                </div>
                </div>
                
           
        )
    }
}

export default withRouter(HowItWorks);