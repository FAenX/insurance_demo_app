import React from "react"
import {withRouter} from  "react-router-dom";
import {Alert} from "react-bootstrap"
import Profile from "./Profile"
import FreeQuotationButton from "../../components/FreeQuotationButton"
import MotorInsuranceButton from "../../components/MotorInsuranceButton"
import {Paper} from "@material-ui/core"
import DashMenu from "./DashMenu"


class Dashboard extends React.Component {

    constructor(props){
        super(props)
        this.state={
            paymentHistory: {},
            insuranceCovers: {},
            active: "personaldetails",
        }
    }

    componentDidMount =()=>{
      
        
    }
    showCard =()=>{
        return this.state.active
    
    }

    render(){
        this.tokens = sessionStorage.getItem("tokens")       
       
        const profile = <Profile />
       

        return(
            <div className="dashboard">
                <DashMenu />
                <FreeQuotationButton />
                <MotorInsuranceButton />              
                
                <div className="dashboard-wrapper">
                
                {profile}
                </div>
            </div>
        )
    }
}

export default withRouter(Dashboard)