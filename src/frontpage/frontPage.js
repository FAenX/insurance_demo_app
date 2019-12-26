import React from "react";
import {withRouter} from "react-router-dom"
import { Button} from "react-bootstrap"
import Home from "./Home"
import HowItWorks from './HowItWorks'
import OurPatners from "./OurPatners"

class FrontPage extends React.Component {
    constructor(props){
        super(props)
        this.state={
            providers: ""

        }
    }

    componentDidMount = ()=>{
      

    }

    handleSubmit =(event)=>{
        event.preventDefault()
        this.props.history.push('/covers')
    }

    handleClickedSub = (event) =>{
        event.preventDefault()
        this.props.history.push('/cover')
    }

    

    render(){
       

        return(
            <div className="front-page">
                <div className="cover-page">
                    
                    <Home/>
                   
                </div>
            
                <div>
                    <HowItWorks/>
                </div>

                <div>
                    <OurPatners/>
                </div>   
                     
               
                       
            </div>
        )
    }
}
export default withRouter (FrontPage)