import React,{useState} from "react"
import {Button, TextField, Paper} from "@material-ui/core"
import Backdrop from "../../components/BackDrop"
import SnackBar from "../../components/SnackBar"
import "./SignIn.scss"
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


const LoginForm =props=>{
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


const SignIn =props=> {
    const [userEmail, setEmail] = useState("")
    const [userPassword, setPassword] = useState("")
    const [response, setResponse] = useState({message: "", status: ""})
    const [backdrop, setBackdrop] = useState(false)
    const [snackbar, setSnackbar] = useState(false)
   

    const submitForm =async()=> {
        setBackdrop(true)
        const url = "/api/v1/users/token/"
        const data = {email: userEmail, password: userPassword}
        const request = await fetch(url, {
            method: 'POST', 
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) 
        })

        const response = await request.json()
        
        if (response !== null &&
            response !== undefined &&
            Object.keys(response).length > 1)
        {
            sessionStorage.setItem("tokens", JSON.stringify(response))
            let res = response
            res["status"]="success"
            res["message"]="Successfully Logged in"                
            setResponse(res)
            setSnackbar(true)
            setBackdrop(false)
            props.successListener()
                
            setTimeout(()=>{
                handleRedirectOnLogin()  
            }, 1000)
        }                                                  
        return response 
    }

    const handleEmailChange = (event) =>{
        event.preventDefault()
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) =>{
        event.preventDefault()
        console.log(event.target.value)
        setPassword(event.target.value)
    
    }

    const handleRedirectOnLogin = () => {
        setTimeout(()=>{
            props.history.push("/dashboard")
        }, 1000)
        
    }

    const validateForm = ()=>{
        return userEmail !== "" && userPassword !== "";
    }
    const signUp=()=>{
        props.history.push("/signup")
    }

    const closeSnackBar=()=>{
        setSnackbar(false)
    }

    const alert = <SnackBar 
                    status={response.status}
                    message={response.message}
                    show={snackbar}
                    onClose={closeSnackBar}
                />

    return(
        
        <div className="signin-wrapper">
            <Backdrop open={backdrop}/>
            {alert}
            
            <Paper variant="outlined" className="signin-form-wrapper">
                    <div className="headline-text sliding-effect">
                        Sign In
                    </div>
                    <LoginForm 
                        email={userEmail} 
                        password={userPassword}
                        handleEmailChange={handleEmailChange}
                        handlePasswordChange={handlePasswordChange}
                    />

                    <div className="buttons">
                        <ActionButton onClick={submitForm} title={"login"} icon={<PersonOutline />}/>
                        <ActionButton onClick={signUp} title={"create account"} icon={<PersonAddSharp />}/>
                    </div>
                    <div className="social-auth">
                        <SocialLogin onClick={signUp} title={"Google"} icon={<GTranslate />}/>
                        <SocialLogin onClick={signUp} title={"FaceBook"} icon={<Facebook />}/>
                    </div>
                    
            </Paper>
        
        </div>
        
    )


}

export default SignIn;