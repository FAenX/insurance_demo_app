import React from "react"
import {Paper, ListItem} from "@material-ui/core"

const Vehicle =props=> {
   
    return(
        <Paper variant="outlined" className="q-content sliding-effect" id="vehicle-details">
            <ListItem button>Vehicle Use:   <b>{props.vehicle.vehicleUse}</b></ListItem>                                        
            <hr className="divider"></hr>
            <ListItem button>Vehicel Make: <b>{props.vehicle.vehicleMake}</b></ListItem>
            <hr className="divider"></hr>
            <ListItem button>Vehicel Model: <b>{props.vehicle.vehicleModel}</b></ListItem>
            <hr className="divider"></hr>                                        
            <ListItem button>REG Number:  <b>{props.vehicle.regNo}</b> </ListItem>
            <hr className="divider"></hr>
            <ListItem button>Vehicle value(KSH):  <b>{props.vehicle.vehicleValue}</b> </ListItem>
            <hr className="divider"></hr>
            <ListItem button>Vehicle Capacity:  <b>{props.vehicle.tonnes}</b> </ListItem>
        </Paper>   
    )
}

export default Vehicle