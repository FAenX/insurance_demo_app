import React from "react"
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Card from "@material-ui/core/Card"

class PersonalDetails extends React.Component{

    render(){
        return(
            <div className="swipeable-quote-form-form">
                <div className="swipeable-quote-form-sub-header">Personal details</div>
                <Card variant="outlined" className="swipeable-quote-form-content">
                    <FormControl className="form-controls">
                    <TextField 
                        id="name" 
                        label="John Doe"
                        variant="outlined"
                        onChange="" 
                        helperText="Full Name"
                        value=""
                    />
                    </FormControl>
                    <FormControl className="form-controls">
                    <TextField 
                        id="phone-number" 
                        label="07xx 5xx 6xx"
                        variant="outlined"
                        onChange="" 
                        helperText="Mobile Number"
                        value=""
                    />
                    </FormControl>
                    <FormControl className="form-controls">
                    <TextField 
                        id="email" 
                        label="email@example.com"
                        variant="outlined"
                        onChange="" 
                        helperText="Email Address"
                        value=""
                    />
                    </FormControl>
                    <FormControl className="form-controls">
                    <TextField 
                        id="location" 
                        label="Nairobi"
                        variant="outlined"
                        onChange="" 
                        helperText="Location"
                        value=""
                    />
                    </FormControl>
                    
                </Card>
            </div>
        )
    }
}

export default PersonalDetails;

        