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

        const error=(value)=>{
            if (value.length < 1){
                return true
            }
            return false
        }

        if(this.props.vehicle.vehicleUse.startsWith("commercial")){
            tonnes= 
                <FormControl variant="outlined" className="form-controls ">
                    <InputLabel>vehicle load capacity</InputLabel>
                    <Select
                        name="tonnes"
                        value={this.props.vehicle.tonnes}
                        onChange={this.props.vehicleOnChangeListener}
                        labelWidth={130}
                        error={error(this.props.vehicle.tonnes)}

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
            <Paper variant="outlined" className="quote-form">
                
               
                <div className="quote-form-sub-header">Vehicle details</div>
                    <FormControl variant="outlined" className="form-controls">
                        <InputLabel  >
                            Vehicle use
                        </InputLabel>
                        <Select
                            name="vehicleUse" 
                            value={this.props.vehicle.vehicleUse}
                            onChange={this.props.vehicleOnChangeListener}
                            labelWidth={100}
                            error={error(this.props.vehicle.vehicleUse)}
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
                    
                    <div className="form-controls">
                    <TextField 
                        id="vehicleMake" 
                        label="Vehicle make"
                        variant="outlined"
                        value={this.props.vehicle.vehicleMake}
                        onChange={this.props.vehicleOnChangeListener}
                        error={error(this.props.vehicle.vehicleMake)}
                    />
                    </div>
                   
                    <div className="form-controls">
                    <TextField 
                        id="vehicleModel" 
                        label="Crown"
                        variant="outlined"
                        value={this.props.vehicle.vehicleModel}
                        onChange={this.props.vehicleOnChangeListener}
                        error={error(this.props.vehicle.vehicleModel)}
                    />
                    </div>
                    <div className="form-controls">
                    <TextField 
                        id="vehicleValue" 
                        label="1,400,000"
                        variant="outlined"
                        onChange={this.props.vehicleOnChangeListener}
                        value={this.props.vehicle.vehicleValue}
                        error={error(this.props.vehicle.vehicleValue)}
                        
                    />
                    </div>
                    <div className="form-controls">
                    <FormControl variant="outlined" className="form-controls">
                        <InputLabel  >
                            Vehicle use
                        </InputLabel>
                        <Select
                            name="yearOfManufacture" 
                            value={this.props.vehicle.yearOfManufacture}
                            onChange={this.props.vehicleOnChangeListener}
                            labelWidth={100}
                            error={error(this.props.vehicle.yearOfManufacture)}
                        >
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={2020}><em>2020</em></MenuItem>
                       
                        </Select>
                    </FormControl>
                    </div>
            </Paper>
        )
    }
}

export default VehicleDetails;

        