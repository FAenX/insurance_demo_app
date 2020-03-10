import React, { useState } from "react"
import BackDrop from "../../components/BackDrop"
import {Button, TextField, Paper} from "@material-ui/core"
import SnackBar from "../../components/SnackBar"
import "./SignUp.scss"
import {GTranslate, Facebook, PersonAddSharp, PersonOutline} from "@material-ui/icons"

const ActionButton=props=>{
    const buttonStyle={
        textTransform: "capitalize",
        color: "inherit",
        margin: "1em"
    }

    return <Button 
                style={buttonStyle} 
                onClick={props.onClick}
                variant={props.variant}
            >
               
                {props.icon}
                {props.title}
            </Button>
}

const SocialLogin=props=>{
    return <ActionButton variant={"outlined"} {...props}/>
}

const SignUpForm =props=>{
    const fieldStyle={
        margin: ".5em",
    }
    return <>
            <TextField 
                style={fieldStyle}
                id="email" 
                label="Email"
                variant="outlined"
                value={props.email}
                onChange={props.handleEmailChange}
                // error={error(props.user.first_name)}
                disabled={props.loggedIn}
            />
            <TextField 
                style={fieldStyle}
                id="firstname" 
                label="First Name"
                variant="outlined"
                value={props.firstName}
                onChange={props.handleFirstNameChange}
                // error={error(props.user.first_name)}
                disabled={props.loggedIn}
            />
            <TextField 
                style={fieldStyle}
                id="lastname" 
                label="Last Name"
                variant="outlined"
                value={props.lastName}
                onChange={props.handleLastNameChange}
                // error={error(props.user.first_name)}
                disabled={props.loggedIn}
            />
            <TextField 
                style={fieldStyle}
                id="password" 
                label="Password"
                variant="outlined"
                value={props.password}
                onChange={props.handlePasswordChange}
                // error={error(props.user.first_name)}
                disabled={props.loggedIn}
            />
            </>
}




const SignUp =props=> {
    const [userEmail, setEmail] = useState("")
    const [userPassword, setPassword] = useState("")
    const [response, setResponse] = useState({message: "", status: ""})
    const [backdrop, setBackdrop] = useState(false)
    const [snackbar, setSnackbar] = useState(false)
    const [userFirstName, setFirstName] = useState("")
    const [userLastName, setLastName]=useState("")
   

    const submitForm=async()=>{
        setBackdrop(true)
        const data = {
            email: userEmail,
            password: userPassword,
            first_name: userFirstName,
            last_name: userLastName
        }
        const url = "/api/v1/users/"
        const request = await fetch(url, {
            method: 'POST', 
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) 
        })

        const response = await request.json()

        if (response.status===201){
            setResponse["status"]="success"
            setResponse["message"]="Successfully created"                
            setBackdrop(false)
            setSnackbar(true)
        }else{
            setResponse["status"]="error"
            setResponse["message"]="An error occured" 
            setBackdrop(false)
            setSnackbar(true)
        } 
        return response           
               
    }

    const onCloseSnackBar=()=>{
       setSnackbar(false)
    }

    const handleEmailChange = (event) =>{
        setEmail(event.target.value)
    }

    const handleFirstNameChange = (event) =>{
       setFirstName(event.target.value)
    }

    const handleLastNameChange = (event) =>{
        setLastName(event.target.value)
    }

    const handlePasswordChange = (event) =>{
       setPassword(event.target.value)
    }

    const validateForm = ()=>{
        return userEmail.length > 0 
            && userPassword.length > 0 
            && userFirstName.length > 0 
            && userLastName.length > 0
    }

   
    const alert = <SnackBar 
                    status={response.status}
                    message={response.message}
                    show={snackbar}
                    onClose={onCloseSnackBar}
                />

    return(

        <div className="signup-wrapper">
                <div>{alert}</div>
                <BackDrop open={backdrop}/>
                
                <Paper variant="outlined" className="signup-form-wrapper">
                    <div className="headline-text sliding-effect">
                        Sign Up
                    </div>
                    <SignUpForm 
                        handlePasswordChange={handlePasswordChange} password={userPassword}
                        handleEmailChange={handleEmailChange} email={userEmail}
                        handleFirstNameChange={handleFirstNameChange} firstName={userFirstName}
                        handleLastNameChange={handleLastNameChange} lastName={userLastName}
                    />
                    <div className="buttons">
                        <ActionButton onClick={submitForm} title={"Create account"} icon={<PersonOutline />}/>
                        <ActionButton onClick={submitForm} title={"Login"} icon={<PersonAddSharp />}/>
                    </div>
                    <div className="social-auth">
                        <SocialLogin onClick={submitForm} title={"Google"} icon={<GTranslate />}/>
                        <SocialLogin onClick={submitForm} title={"FaceBook"} icon={<Facebook />}/>
                    </div>
                </Paper>
            
            </div>
        
    )
}


export default SignUp