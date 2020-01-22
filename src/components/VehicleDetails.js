import React from "react"
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Card from "@material-ui/core/Card"
import {Select, MenuItem, InputLabel, Menu} from "@material-ui/core"

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
            <div className="swipeable-quote-form-form">
                <div className="swipeable-quote-form-sub-header">Vehicle details</div>
                <Card variant="outlined" className="swipeable-quote-form-content">
                    <FormControl variant="outlined" className="form-controls">
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

                    <FormControl className="form-controls">
                    <TextField 
                        id="vehicleMake" 
                        label="Vehicle make"
                        variant="outlined"
                        onChange={this.props.vehicleOnChangeListener}
                        helperText="Toyota"
                    />
                    </FormControl>
                   
                    <FormControl className="form-controls">
                    <TextField 
                        id="vehicleModel" 
                        label="Crown"
                        variant="outlined"
                        onChange={this.props.vehicleOnChangeListener}
                        helperText="Vehicle model"
                    />
                    </FormControl>
                    <FormControl className="form-controls">
                    <TextField 
                        id="vehicleValue" 
                        label="1,400,000"
                        variant="outlined"
                        onChange={this.props.vehicleOnChangeListener}
                        helperText="Vehicle Value"
                    />
                    </FormControl>
                    <FormControl className="form-controls">
                    <TextField 
                        id="yearOfManufacture" 
                        label="2020"
                        variant="outlined"
                        onChange={this.props.vehicleOnChangeListener}
                        helperText="year of manufacture"
                    />
                    </FormControl>
                    
                </Card>
            </div>
        )
    }
}

export default VehicleDetails;

        