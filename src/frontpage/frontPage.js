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
            subCategories: "",
            providers: ""

        }
    }

    componentDidMount = ()=>{
        fetch("/api/v1/products/sub-categories/", {
            method: "GET",
            
        }).then(res=>{
            if(res.status === 200){
                res.json().then((data)=>{
                    console.log(data)
                    this.setState({
                        subCategories: data
                    });
                }).catch((error)=>{
                    console.log(error)
                    console.log(res)
                })
            } else {
                console.log(res)
            }
        }).catch((err)=>{
            console.log(err)
        })

        

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
        let highlights;
        

        if (this.state.subCategories) {
            highlights = this.state.subCategories.map(i => {
                    return <div className="highlight">
                        <div className="sub-category">{i.name}</div>
                        <img alt="insurance" src={""}/>
                        <div>{i.description}</div>
                        <Button variant="danger" onClick={this.handleClickedSub}>View more</Button>
                    </div>
            })
        }

       

        return(
            <div className="front-page">
                <div className="cover-page">
                    <div>
                        <Home />
                    </div>
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