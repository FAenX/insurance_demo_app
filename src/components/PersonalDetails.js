import React from "react"
import TextField from '@material-ui/core/TextField';
import { Paper } from "@material-ui/core"

class PersonalDetails extends React.Component{

    render(){
        return(
            <Paper variant="elevation" elevation={3} className="swipeable-quote-form-form">
                
                <div variant="outlined" className="swipeable-quote-form-content">
                <div className="swipeable-quote-form-sub-header sliding-effect8s">Personal details</div>
                    <div className="form-controls sliding-effect">
                    <TextField 
                        id="first_name" 
                        label="John"
                        variant="outlined"
                        onChange={this.props.userOnChangeListener}
                        helperText="Full Name"
                    />
                    </div>
                    <div className="form-controls sliding-effect">
                    <TextField 
                        id="last_name" 
                        label="Doe"
                        variant="outlined"
                        onChange={this.props.userOnChangeListener}
                        helperText="Full Name"
                    />
                    </div>
                    <div className="form-controls sliding-effect">
                    <TextField 
                        id="phone" 
                        label="07xx 5xx 6xx"
                        variant="outlined"
                        onChange={this.props.userOnChangeListener}
                        helperText="Mobile Number"
                    />
                    </div>
                    <div className="form-controls sliding-effect8s">
                    <TextField 
                        id="email" 
                        label="email@example.com"
                        variant="outlined"
                        onChange={this.props.userOnChangeListener}
                        helperText="Email Address"
                    />
                    </div>
                    <div className="form-controls sliding-effect10s">
                    <TextField 
                        id="location" 
                        label="Nairobi"
                        variant="outlined"
                        onChange={this.props.userOnChangeListener}
                        helperText="Location"
                    />
                    </div>
                    
                </div>
            </Paper>
        )
    }
}

export default PersonalDetails;

        