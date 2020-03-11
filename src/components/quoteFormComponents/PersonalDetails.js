import React from "react"
import TextField from '@material-ui/core/TextField';
import { Paper } from "@material-ui/core"
import "./Style.scss"

const PersonalDetails =props=>{

    const error=(value)=>{
        if (value.length < 1){
            return true
        }
        return false
    }
        
    return(
        <Paper variant="outlined" className="quote-form">
            <div className="quote-form-sub-header ">Personal details</div>
                <div className="form-controls">
                <TextField 
                    id="first_name" 
                    label="First Name"
                    variant="outlined"
                    value={props.user.first_name}
                    onChange={props.userOnChangeListener}
                    error={error(props.user.first_name)}
                    disabled={props.loggedIn}
                />
                </div>
                <div className="form-controls">
                <TextField 
                    id="last_name" 
                    label="Last Name"
                    variant="outlined"
                    value={props.user.last_name}
                    onChange={props.userOnChangeListener}
                    error={error(props.user.last_name)}
                    disabled={props.loggedIn}
                />
                </div>
                <div className="form-controls ">
                <TextField 
                    id="phone" 
                    label="07xx 5xx 6xx"
                    variant="outlined"
                    value={props.user.phone}
                    onChange={props.userOnChangeListener}
                    // error={error(this.props.user.phone)}
                    disabled={props.loggedIn}
                />
                </div>
                <div className="form-controls ">
                <TextField 
                    id="email" 
                    label="email@example.com"
                    variant="outlined"
                    value={props.user.email}
                    onChange={props.userOnChangeListener}
                    error={error(props.user.email)}
                    disabled={props.loggedIn}
                />
                </div>
                <div className="form-controls ">
                <TextField 
                    id="location" 
                    label="Location"
                    variant="outlined"
                    value={props.user.location}
                    onChange={props.userOnChangeListener}
                    // error={error(this.props.user.location)} 
                    disabled={props.loggedIn}                       
                />
                </div>
        </Paper>
    )

}

export default PersonalDetails;

        