import React from "react"
import TextField from '@material-ui/core/TextField';
import {Paper, FormHelperText, FormControl}from "@material-ui/core"
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
        let tonnes;

        if(this.props.vehicle.vehicleUse.startsWith("commercial")){
            tonnes= 
                <FormControl variant="outlined" className="form-controls sliding-effect">
                    <InputLabel>vehicle load capacity</InputLabel>
                    <Select
                        name="tonnes"
                        value={this.props.vehicle.tonnes}
                        onChange={this.props.vehicleOnChangeListener}
                        labelWidth={130}
                    >
                    <MenuItem value="3">3 tonnes and less</MenuItem>
                    <MenuItem value="38">3-8 tonnes</MenuItem>
                    <MenuItem value="810">8 to 10 tonnes</MenuItem>
                    </Select>
                    <FormHelperText>
                        Ho many tonnes does your vehicle carry?
                    </FormHelperText>
                </FormControl>
              
        }
        return(
            <Paper variant="elevation" elevation={3} className="swipeable-quote-form-form">
                
                <div className="swipeable-quote-form-content">
                <div className="swipeable-quote-form-sub-header sliding-effect">Vehicle details</div>
                    <FormControl variant="outlined" className="form-controls sliding-effect">
                        <InputLabel  >
                            Vehicle use
                        </InputLabel>
                        <Select
                            name="vehicleUse" 
                            value={this.props.vehicle.vehicleUse}
                            onChange={this.props.vehicleOnChangeListener}
                            labelWidth={100}
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {vehicleUseOpts.map(option => (
                        <MenuItem key={option.value}  value={option.value}>
                            {option.label}
                        </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                    {tonnes}
                    
                    <div className="form-controls sliding-effect">
                    <TextField 
                        id="vehicleMake" 
                        label="Vehicle make"
                        variant="outlined"
                        onChange={this.props.vehicleOnChangeListener}
                        helperText="Toyota"
                    />
                    </div>
                   
                    <div className="form-controls sliding-effect">
                    <TextField 
                        id="vehicleModel" 
                        label="Crown"
                        variant="outlined"
                        onChange={this.props.vehicleOnChangeListener}
                        helperText="Vehicle model"
                    />
                    </div>
                    <div className="form-controls sliding-effect8s">
                    <TextField 
                        id="vehicleValue" 
                        label="1,400,000"
                        variant="outlined"
                        onChange={this.props.vehicleOnChangeListener}
                        helperText="Vehicle Value"
                    />
                    </div>
                    <div className="form-controls sliding-effect10s">
                    <TextField 
                        id="yearOfManufacture" 
                        label="2020"
                        variant="outlined"
                        onChange={this.props.vehicleOnChangeListener}
                        helperText="year of manufacture"
                    />
                    </div>
                    
                </div>
            </Paper>
        )
    }
}

export default VehicleDetails;

        