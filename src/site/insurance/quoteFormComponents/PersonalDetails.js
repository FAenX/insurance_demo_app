import React from "react"
import TextField from '@material-ui/core/TextField';
import { Paper } from "@material-ui/core"
import "./Style.scss"

const PersonalDetails =props=>{

    // const[firstName, setFirstName]=useState("First Name")

    const error=(value)=>{
        if (value.length < 1){
            return true
        }
        return false
    }

    const userOnChangeListener=event=>{
        event.preventDefault()
        props.userOnChangeListener(event)
    }
    
        
    return(
        <Paper variant="outlined" className="quote-form">
            <div className="quote-form-sub-header ">Personal details</div>
                <div className="form-controls">
                <TextField 
                    name="first_name" 
                    label="First Name"
                    variant="outlined"
                    defaultValue={props.user.first_name}
                    onChange={userOnChangeListener}
                    error={error(props.user.first_name)}
                    disabled={props.loggedIn}
                />
                </div>
                <div className="form-controls">
                <TextField 
                    name="last_name" 
                    label="Last Name"
                    variant="outlined"
                    defaultValue={props.user.last_name}
                    onChange={userOnChangeListener}
                    error={error(props.user.last_name)}
                    disabled={props.loggedIn}
                />
                </div>
                <div className="form-controls ">
                <TextField 
                    name="phone" 
                    label="07xx 5xx 6xx"
                    variant="outlined"
                    defaultValue={props.user.phone_number}
                    onChange={userOnChangeListener}
                    // error={error(props.user.phone_number)}
                    disabled={props.loggedIn}
                />
                </div>
                <div className="form-controls ">
                <TextField 
                    name="email" 
                    label="email@example.com"
                    variant="outlined"
                    defaultValue={props.user.email}
                    onChange={userOnChangeListener}
                    error={error(props.user.email)}
                    disabled={props.loggedIn}
                />
                </div>
                <div className="form-controls ">
                <TextField 
                    name="location" 
                    label="Location"
                    variant="outlined"
                    defaultValue={props.user.location}
                    onChange={userOnChangeListener}
                    // error={error(props.user.location)} 
                    disabled={props.loggedIn}                       
                />
                </div>
        </Paper>
    )

}

export default PersonalDetails;

        