import React from "react"
import {withRouter} from "react-router-dom"
import Drawer from '@material-ui/core/SwipeableDrawer';
import CloseIcon from '@material-ui/icons/Close';
import {Button} from "@material-ui/core"
import VehicleDetails from "./VehicleDetails"
import PersonalDetails from "./PersonalDetails"


class MotorInsuranceQuoteForm extends React.Component{

   
    render(){
        return(
            <Drawer 
                open={this.props.open}
                onClose={this.props.toggleDrawer(false)}
                onOpen={this.props.toggleDrawer(true)}
            >
                <div  
                    className="swipeable-quote-form" 
                >
                    <div className="close-btn-wrapper" onClick={this.props.toggleDrawer(false)}>
                        <div className="close-btn">
                            <CloseIcon color="primary" />
                        </div>
                    </div>
                    <PersonalDetails />
                    
                    <VehicleDetails />
                    <div></div>
                    <div></div>
                       
                </div>
            </Drawer>
        )
    }
}

export default withRouter(MotorInsuranceQuoteForm)