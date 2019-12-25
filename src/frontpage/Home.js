import React from "react"
import Button from '@material-ui/core/Button';


class Home extends React.Component{
    render(){
        return(
            <div className="home">
                <div className="headline-text">
                    <h1> Buy Motor Vehicle Insurance directly from your Phone</h1>
                   
                </div>
                <div className="headline-subtext">
                <p> Pay through a range of available payment options and download a printable copy of your insurance cover</p>
                
                </div>
                <div className="home-buttons">
                    <div className="get-started-button"><Button variant="contained" onClick={this.handleClickedSub}>Create Free Account</Button></div>
                    <div className="free-quotation-button"><Button variant="outlined"  onClick={this.handleClickedSub}>Get a free quotation</Button></div>
                </div>
            </div>
        )
    }
}

export default Home;