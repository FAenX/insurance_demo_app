import React from "react"
import {withRouter} from  "react-router-dom";
import Profile from "./components/Profile"
import DashMenu from "./components/DashMenu"
import PaymentHistory from "./components/PaymentHistory"
import InsuranceCovers from "./components/InsuranceCovers"
import "./DashBoard.scss"


class Dashboard extends React.Component {
    constructor(props){
        super(props)
        this.state={
            active: "profile",
        }
    }

    componentDidMount =()=>{
    }

    showCard =()=>{
        return this.state.active
    }

    changeListener=(active)=>{
        this.setState({
            active, 
        })
    }

    render(){
        const cards = {
            profile: <Profile />,
            paymentHistory: <PaymentHistory />,
            insuranceCovers: <InsuranceCovers />
        }

        const active = cards[this.state.active]
        return(
            <div className="dashboard">
                <div className="dashboard-wrapper">
                <DashMenu changeListener={this.changeListener}/>
                {/* {active} */}
                </div>
            </div>
        )
    }
}

export default withRouter(Dashboard)