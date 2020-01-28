import React from "react"
import TextField from '@material-ui/core/TextField';
import { Paper } from "@material-ui/core"

class PersonalDetails extends React.Component{

    render(){
        const error=(value)=>{
            if (value.length < 1){
                return true
            }
            return false
        }
        
        return(
            <Paper variant="elevation" elevation={3} className="swipeable-quote-form-form">
                
                <div variant="outlined" className="swipeable-quote-form-content">
                <div className="swipeable-quote-form-sub-header ">Personal details</div>
                    <div className="form-controls">
                    <TextField 
                        id="first_name" 
                        label="First Name"
                        variant="outlined"
                        value={this.props.user.first_name}
                        onChange={this.props.userOnChangeListener}
                        error={error(this.props.user.first_name)}
                        disabled={this.props.loggedIn}
                    />
                    </div>
                    <div className="form-controls">
                    <TextField 
                        id="last_name" 
                        label="Last Name"
                        variant="outlined"
                        value={this.props.user.last_name}
                        onChange={this.props.userOnChangeListener}
                        error={error(this.props.user.last_name)}
                        disabled={this.props.loggedIn}
                    />
                    </div>
                    <div className="form-controls ">
                    <TextField 
                        id="phone" 
                        label="07xx 5xx 6xx"
                        variant="outlined"
                        value={this.props.user.phone}
                        onChange={this.props.userOnChangeListener}
                        helperText="Mobile Number"
                        // error={error(this.props.user.phone)}
                        disabled={this.props.loggedIn}
                    />
                    </div>
                    <div className="form-controls ">
                    <TextField 
                        id="email" 
                        label="email@example.com"
                        variant="outlined"
                        value={this.props.user.email}
                        onChange={this.props.userOnChangeListener}
                        helperText="Email Address"
                        error={error(this.props.user.email)}
                        disabled={this.props.loggedIn}
                    />
                    </div>
                    <div className="form-controls ">
                    <TextField 
                        id="location" 
                        label="Location"
                        variant="outlined"
                        value={this.props.user.location}
                        onChange={this.props.userOnChangeListener}
                        // error={error(this.props.user.location)} 
                        disabled={this.props.loggedIn}                       
                    />
                    </div>
                    
                </div>
            </Paper>
        )
    }
}

export default PersonalDetails;

        