import React from "react"
import {withRouter} from  "react-router-dom";
import {Alert} from "react-bootstrap"
import Profile from "./Profile"
import FreeQuotationButton from "../../utils/FreeQuotationButton"
import MotorInsuranceButton from "../../utils/MotorInsuranceButton"
import {Paper} from "@material-ui/core"
import DashMenu from "./DashMenu"


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
                <DashMenu />
                <FreeQuotationButton />
                <MotorInsuranceButton />
                <Paper className="dashboard-nav">
                    <div className="dash-nav-item" id="personaldetails" onClick={this.handleDashNavClick}>Account</div>
                    <div className="dash-nav-item" id="paymenthistory" onClick={this.handleDashNavClick}>Payment History</div>
                    <div className="dash-nav-item" id="insurancecovers" onClick={this.handleDashNavClick}>Insurance Covers</div> 
                </Paper>  
                
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