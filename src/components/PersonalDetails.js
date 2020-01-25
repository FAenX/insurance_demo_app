import React from "react"
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { Paper, Card } from "@material-ui/core"

class PersonalDetails extends React.Component{

    render(){
        return(
            <Paper variant="elevated" elevation={3} className="swipeable-quote-form-form">
                
                <div variant="outlined" className="swipeable-quote-form-content">
                <div className="swipeable-quote-form-sub-header sliding-effect8s">Personal details</div>
                    <FormControl className="form-controls sliding-effect">
                    <TextField 
                        id="name" 
                        label="John Doe"
                        variant="outlined"
                        onChange={this.props.userOnChangeListener}
                        helperText="Full Name"
                    />
                    </FormControl>
                    <FormControl className="form-controls sliding-effect">
                    <TextField 
                        id="phone" 
                        label="07xx 5xx 6xx"
                        variant="outlined"
                        onChange={this.props.userOnChangeListener}
                        helperText="Mobile Number"
                    />
                    </FormControl>
                    <FormControl className="form-controls sliding-effect8s">
                    <TextField 
                        id="email" 
                        label="email@example.com"
                        variant="outlined"
                        onChange={this.props.userOnChangeListener}
                        helperText="Email Address"
                    />
                    </FormControl>
                    <FormControl className="form-controls sliding-effect10s">
                    <TextField 
                        id="location" 
                        label="Nairobi"
                        variant="outlined"
                        onChange={this.props.userOnChangeListener}
                        helperText="Location"
                    />
                    </FormControl>
                    
                </div>
            </Paper>
        )
    }
}

export default PersonalDetails;

        