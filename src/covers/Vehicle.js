import React from "react"
import {Paper, ListItem} from "@material-ui/core"

class Vehicle extends React.Component {
    constructor(props){
        super(props)
        this.state={

        }
        
    }
    render(){
        return(
            <Paper variant="outlined" className="q-content sliding-effect" id="vehicle-details">
            <ListItem button>Vehicle Use:<b> {this.props.vehicle.vehicleUse}</b></ListItem>                                        
            <hr className="divider"></hr>
            <ListItem button>Vehicel Make: <b>{this.props.vehicle.vehicleMake}</b></ListItem>
            <hr className="divider"></hr>
            <ListItem button>Vehicel Model: <b>{this.props.vehicle.vehicleModel}</b></ListItem>
            <hr className="divider"></hr>                                        
            <ListItem button>REG Number:  <b>{this.props.vehicle.regNo}</b> </ListItem>
            <hr className="divider"></hr>
            <ListItem button>Vehicle value(KSH):  <b>{this.props.vehicle.vehicleValue}</b> </ListItem>
            <hr className="divider"></hr>
            <ListItem button>Vehicle Capacity:  <b>{this.props.vehicle.tonnes}</b> </ListItem>
            </Paper>   
        )
    }
}

export default Vehicle