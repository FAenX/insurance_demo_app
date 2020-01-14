import React from "react"
import Carousel from "./Carousel"


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