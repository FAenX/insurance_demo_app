import React from "react"
import {Card} from "react-bootstrap";
import apa from "../assets/images/apa.png"


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
        let providers;

        if (this.state.providers) {
            providers = this.state.providers.map(i => {
                    return <div key={i.name} className="provider">
                        <div>{i.name}</div>
                        <div><img alt="logo" src={apa}/></div>
                    </div>
            })
        }

        return(
            <div className="providers-wrapper">
                <p>Our patners include:</p>
                <Card>
                    <div className="providers"> {providers} </div>
                    <div className="scroller">
                    <div className="previous round"><div>&#8249;</div></div>
                    <div className="next round"><div>&#8250;</div></div>
                </div>
                </Card>
            </div> 
        )
    }
}

export default OurPatners;