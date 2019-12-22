import React from "react"
import {Button} from "react-bootstrap";


class Home extends React.Component{
    render(){
        return(
            <div className="home">
                <div className="welcome-text">
                    <h1> Buy insurance directly from your Phone</h1>
                    <p> and pay through a range of available payment options</p>
                    <Button variant="primary" onClick={this.handleClickedSub}>Create Free Account</Button>
                </div>
            </div>
        )
    }
}

export default Home;