import React from "react"
import {withRouter} from  "react-router-dom";
import {Alert} from "react-bootstrap"
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import Profile from "./Profile"

class Dashboard extends React.Component {

    constructor(props){
        super(props)
        this.state={
            paymentHistory: {},
            insuranceCovers: {},
            creds: {
                accessToken: "",
                refreshToken: ""
            },
            active: "personaldetails",
        }
    }

    componentDidMount =()=>{
    
    }

    showCard =()=>{
        return this.state.active
    
    }

    render(){
        
        let insuranceCovers;
        let paymentHistory;
        let card;


        if (this.state.insuranceCovers !== {}){
            insuranceCovers = <Alert variant="danger"> Not found </Alert>
        }

        if (this.state.paymentHistory !== {}){
            paymentHistory = <Alert variant="danger"> Not found </Alert>
        }



        // choose card to show
        if (this.state.active === "personaldetails"){
            card = <Profile/>
        } else if (this.state.active === "paymenthistory"){
            card = paymentHistory
        } else if (this.state.active === "insurancecovers"){
            card = insuranceCovers
        } 

        return(
            <div className="dashboard">
                <div className="dashboard-nav">
                    <Fab variant="" color="secondary" aria-label="add">
                    <AddIcon />
                    </Fab>
                    <div className="dash-nav-item" id="personaldetails" onClick={this.handleDashNavClick}>Account</div>
                    <div className="dash-nav-item" id="paymenthistory" onClick={this.handleDashNavClick}>Payment History</div>
                    <div className="dash-nav-item" id="insurancecovers" onClick={this.handleDashNavClick}>Insurance Covers</div> 
                </div>  
                
                <div className="dashboard-wrapper">
                
                <div className="dashboard-main">
                    <div className="profile">
                        <div className="profile-info">  
                        <div>{card}</div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Dashboard)