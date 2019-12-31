import React from "react"
import Carousel from "./Carousel"


class OurPatners extends React.Component{
    constructor(props){
        super(props)
        this.state={
            providers: ""

        }
    }

    componentDidMount = ()=>{
        fetch("/api/v1/products/providers/", {
            method: "GET",
            
        }).then(res=>{
            if(res.status === 200){
                res.json().then((data)=>{
                    console.log(data)
                    this.setState({
                        providers: data
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
    
    render(){
        
        return(
            <div className="providers-wrapper">
                <div className="providers-headline">
                    <h1>Our Insurance Patners</h1>
                    <p>With over 12 insurers to choose from, Name works actively to find an ideal plan for you</p>
                </div>
                <div className="providers-carousel"> 
                   
                        <Carousel/>
                    </div>
                       
            </div> 
        )
    }
}

export default OurPatners;