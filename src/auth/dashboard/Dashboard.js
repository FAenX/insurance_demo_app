import React from "react"
import {withRouter} from  "react-router-dom";
import Profile from "./components/Profile"
import FreeQuotationButton from "../../components/FreeQuotationButton"
import MotorInsuranceButton from "../../components/MotorInsuranceButton"
import DashMenu from "./DashMenu"
import PaymentHistory from "./components/PaymentHistory"
import InsuranceCovers from "./components/InsuranceCovers"
import DashCarousel from "./components/DashCarousel"



class Dashboard extends React.Component {
    constructor(props){
        super(props)
        this.state={
            paymentHistory: {},
            insuranceCovers: {},
            active: "profile",
        }
    }

    componentDidMount =()=>{
    }

    showCard =()=>{
        return this.state.active
    }

    render(){
        const profile = <Profile />
        const paymentHistory = <PaymentHistory />
        const insuranceCovers = <InsuranceCovers />

        return(
            <div className="dashboard">
                <FreeQuotationButton />
                <MotorInsuranceButton /> 
                <div className="dashboard-wrapper">
                <DashMenu />
                <DashCarousel />
                </div>
            </div>
        )
    }
}

export default withRouter(Dashboard)