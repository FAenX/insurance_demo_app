import React from "react"
import {Button} from "react-bootstrap";



class Home extends React.Component{
    render(){
        return(
            <div className="home">
                <div className="welcome-text">
                    <h1> Buy Motor Vehicle Insurance directly from your Phone</h1>
                    <p> Pay through a range of available payment options and download a printable copy of your insurance cover</p>
                </div>
                <div className="home-buttons">
                    <Button variant="primary" onClick={this.handleClickedSub}>Create Free Account</Button>
                    <Button variant="warning" onClick={this.handleClickedSub}>Get a free quotation</Button>
                </div>
            </div>
        )
    }
}

export default Home;