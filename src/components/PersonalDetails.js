import React from "react"
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
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
                        onChange={this.props.userOnChangeListener}
                        helperText="Full Name"
                    />
                    </FormControl>
                    <FormControl className="form-controls">
                    <TextField 
                        id="phone" 
                        label="07xx 5xx 6xx"
                        variant="outlined"
                        onChange={this.props.userOnChangeListener}
                        helperText="Mobile Number"
                    />
                    </FormControl>
                    <FormControl className="form-controls">
                    <TextField 
                        id="email" 
                        label="email@example.com"
                        variant="outlined"
                        onChange={this.props.userOnChangeListener}
                        helperText="Email Address"
                    />
                    </FormControl>
                    <FormControl className="form-controls">
                    <TextField 
                        id="location" 
                        label="Nairobi"
                        variant="outlined"
                        onChange={this.props.userOnChangeListener}
                        helperText="Location"
                    />
                    </FormControl>
                    
                </Card>
            </div>
        )
    }
}

export default PersonalDetails;

        