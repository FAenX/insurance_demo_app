import React from "react";
import {withRouter} from "react-router-dom"
import {Button} from "@material-ui/core"


class WhoAreWe extends React.Component {

    render(){
        return(
            <div className="who-are-we-wrapper">
                <div className="coversub-cover">                
                <div >                    
                    <div className="cover-header-text-wrapper">
                        <div className="cover-header-text">
                            <h1>Who are we</h1>
                            <h2>
                                GET A QUOTE IN 3 EASY STEPS
                                It will take you less than 2 minutes.</h2>
                        </div>                        
                        <div className="cover-button"><Button variant="contained">Get started</Button></div>
                    </div>
                    
                    </div>            
                </div>
                <div className="main-body-wrapper">                    
                    
                    <div className="main-body-highlight-text">
                        
                    </div>
                    <div className="main-body-text">
                                       
                    </div>
                </div>      
            </div>
        )
    }
}

export default withRouter(WhoAreWe);