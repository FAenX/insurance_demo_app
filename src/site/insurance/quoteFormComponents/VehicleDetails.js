import React from "react"
import TextField from '@material-ui/core/TextField';
import {Paper, FormHelperText, FormControl}from "@material-ui/core"
import {Select, MenuItem, InputLabel} from "@material-ui/core"

const VehicleCapacity=props=>{
    const vehicleOnChangeListener=event=>{
        props.vehicleOnChangeListener(event)
    }

    return(
     
        <FormControl variant="outlined" className="form-controls ">
            <InputLabel>vehicle load capacity</InputLabel>
            <Select
                name="tonnes"
                defaultValue={props.vehicle.tonnes}
                onChange={vehicleOnChangeListener}
                labelWidth={130}
                // error={error(props.vehicle.tonnes)}

            >
            <MenuItem value="3">3 tonnes and less</MenuItem>
            <MenuItem value="38">3-8 tonnes</MenuItem>
            <MenuItem value="810">8 to 10 tonnes</MenuItem>
            </Select>
            <FormHelperText>
                Ho many tonnes does your vehicle carry?
            </FormHelperText>
        </FormControl>
              
    )
}

const VehicleDetails=props=>{
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

        const error=(value)=>{
            if (value.length < 1){
                return true
            }
            return false
        }

        const vehicleOnChangeListener=event=>{
            props.vehicleOnChangeListener(event)
        }

        const tonnes =()=>{
            console.log("commercial")
            if(props.vehicle.vehicleUse === "commercial"){
                return <VehicleCapacity {...props} />
            }
        }
       
        return(
            <Paper variant="outlined" className="quote-form">
                <div className="quote-form-sub-header">Vehicle details</div>
                    <FormControl variant="outlined" className="form-controls">
                        <InputLabel> Vehicle use </InputLabel>
                        <Select
                            name="vehicleUse" 
                            defaultValue={props.vehicle.vehicleUse}
                            onChange={vehicleOnChangeListener}
                            labelWidth={100}
                            error={error(props.vehicle.vehicleUse)}
                        >
                            <MenuItem value=""><em>None</em> </MenuItem>
                            {vehicleUseOpts.map(option => (
                            <MenuItem key={option.value}  value={option.value}>
                                {option.label}
                            </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    {tonnes()}
                    
                    <div className="form-controls">
                    <TextField 
                        name="vehicleMake" 
                        label="Vehicle make"
                        variant="outlined"
                        defaultValue={props.vehicle.vehicleMake}
                        onChange={vehicleOnChangeListener}
                        error={error(props.vehicle.vehicleMake)}
                    />
                    </div>
                   
                    <div className="form-controls">
                    <TextField 
                        name="vehicleModel" 
                        label="Crown"
                        variant="outlined"
                        defaultValue={props.vehicle.vehicleModel}
                        onChange={vehicleOnChangeListener}
                        error={error(props.vehicle.vehicleModel)}
                    />
                    </div>
                    <div className="form-controls">
                    <TextField 
                        name="vehicleValue" 
                        label="1,400,000"
                        variant="outlined"
                        onChange={vehicleOnChangeListener}
                        defaultValue={props.vehicle.vehicleValue}
                        error={error(props.vehicle.vehicleValue)}
                        
                    />
                    </div>
                    <div className="form-controls">
                    <FormControl variant="outlined" className="form-controls">
                        <InputLabel  >
                            Vehicle use
                        </InputLabel>
                        <Select
                            name="yearOfManufacture" 
                            defaultValue={props.vehicle.yearOfManufacture}
                            onChange={vehicleOnChangeListener}
                            labelWidth={100}
                            error={error(props.vehicle.yearOfManufacture)}
                        >
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={2020}><em>2020</em></MenuItem>
                       
                        </Select>
                    </FormControl>
                    </div>
            </Paper>
        )
  
}

export default VehicleDetails;

        