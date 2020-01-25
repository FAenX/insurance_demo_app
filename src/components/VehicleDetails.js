import React from "react"
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import {Paper, Card}from "@material-ui/core"
import {Select, MenuItem, InputLabel} from "@material-ui/core"

class VehicleDetails extends React.Component{

    render(){
        const vehicleUseOpts=[
            {
                label: "Private",
                value: "private"
            },
            {
                label: "Commercial",
                value: "commercial"
            },
            {
                label: "For hire",
                value: "forhire"
            },

        ]
        return(
            <Paper variant="elevated" elevation={3} className="swipeable-quote-form-form">
                
                <div className="swipeable-quote-form-content">
                <div className="swipeable-quote-form-sub-header sliding-effect">Vehicle details</div>
                    <FormControl variant="outlined" className="form-controls sliding-effect">
                        <InputLabel  >
                            Vehicle use
                        </InputLabel>
                        <Select                        
                            id="vehicleUse"
                            value={this.props.vehicle.vehicleUse}
                            onChange={this.props.vehicleOnChangeListener}
                            labelWidth={100}
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {vehicleUseOpts.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                        ))}
                        </Select>
                    </FormControl>

                    <FormControl className="form-controls sliding-effect">
                    <TextField 
                        id="vehicleMake" 
                        label="Vehicle make"
                        variant="outlined"
                        onChange={this.props.vehicleOnChangeListener}
                        helperText="Toyota"
                    />
                    </FormControl>
                   
                    <FormControl className="form-controls sliding-effect">
                    <TextField 
                        id="vehicleModel" 
                        label="Crown"
                        variant="outlined"
                        onChange={this.props.vehicleOnChangeListener}
                        helperText="Vehicle model"
                    />
                    </FormControl>
                    <FormControl className="form-controls sliding-effect8s">
                    <TextField 
                        id="vehicleValue" 
                        label="1,400,000"
                        variant="outlined"
                        onChange={this.props.vehicleOnChangeListener}
                        helperText="Vehicle Value"
                    />
                    </FormControl>
                    <FormControl className="form-controls sliding-effect10s">
                    <TextField 
                        id="yearOfManufacture" 
                        label="2020"
                        variant="outlined"
                        onChange={this.props.vehicleOnChangeListener}
                        helperText="year of manufacture"
                    />
                    </FormControl>
                    
                </div>
            </Paper>
        )
    }
}

export default VehicleDetails;

        