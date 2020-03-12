import React from "react"
import Profile from "./components/Profile"
import PaymentHistory from "./components/PaymentHistory"
import InsuranceCovers from "./components/InsuranceCovers"
import "./DashBoard.scss"


const Dashboard =props=> {
    return(
        <div className="dashboard">
            <div className="dashboard-wrapper">
                <Profile />
                <PaymentHistory />
                <InsuranceCovers />
            </div>
        </div>
    ) 
}

export default Dashboard