import React from "react"
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Card from "@material-ui/core/Card"

class VehicleDetails extends React.Component{

    render(){
        const vehicleUseOpts=["Private", "commercial", "For Hire"]
        return(
            <div className="swipeable-quote-form-form">
                <div className="swipeable-quote-form-sub-header">Vehicle details</div>
                <Card variant="outlined" className="swipeable-quote-form-content">
                    <FormControl className="form-controls">
                    <TextField
                        id="vehicle-use"
                        select
                        label="Vehicle use"
                        value=""
                        onChange=""
                        SelectProps={{
                            native: true,
                        }}
                        helperText="Please select vehicle use"
                        variant="outlined"
                    >
                        {vehicleUseOpts.map(option => (
                            <option key={option} value={option}>
                            {option}
                            </option>
                        ))}
                        </TextField>
                    </FormControl>
                    <FormControl className="form-controls">
                    <TextField 
                        id="make" 
                        label="Toyota"
                        variant="outlined"
                        onChange="" 
                        helperText="Vehicle Make"
                        value=""
                    />
                    </FormControl>
                   
                    <FormControl className="form-controls">
                    <TextField 
                        id="model" 
                        label="Crown"
                        variant="outlined"
                        onChange="" 
                        helperText="Vehicle model"
                        value=""
                    />
                    </FormControl>
                    <FormControl className="form-controls">
                    <TextField 
                        id="value" 
                        label="1,400,000"
                        variant="outlined"
                        onChange="" 
                        helperText="Vehicle Value"
                        value=""
                    />
                    </FormControl>
                    <FormControl className="form-controls">
                    <TextField 
                        id="Year" 
                        label="2020"
                        variant="outlined"
                        onChange="" 
                        helperText="year of manufacture"
                        value=""
                    />
                    </FormControl>
                    
                </Card>
            </div>
        )
    }
}

export default VehicleDetails;

        