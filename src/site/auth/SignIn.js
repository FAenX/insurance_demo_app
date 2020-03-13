import React,{useState} from "react"
import {Button, TextField, Paper, Dialog} from "@material-ui/core"
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

const AlertDialog=props=> {
  
    return (
      
        <Dialog
          open={props.open}
          keepMounted
          onClose={props.handleClose}
        >
          <ActionButton title="Get a quotation for your vehicle" onClick={()=>{props.loginRedirect("quotation")}}/>
          <ActionButton title="Dashboard" onClick={()=>{props.history.push("/dashboard")}} />
              
        </Dialog>
      
    );
  }


const SignIn =props=> {
    const [userEmail, setEmail] = useState("")
    const [userPassword, setPassword] = useState("")
    const [response, setResponse] = useState({message: "", status: ""})
    const [backdrop, setBackdrop] = useState(false)
    const [snackbar, setSnackbar] = useState(false)
    const [redirectAlert, setRedirectAlert] = useState(false)
   

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


        console.log(request)
        if(request.status===200){
            let res = response
            res["status"]="success"
            res["message"]="Successfully Logged in"                
            setResponse(res)
            setSnackbar(true)
            setBackdrop(false)
            setRedirectAlert(true)
            const data = await request.json()
            props.loginListener(data)                                                          
            return data 

        }else if(request.status === 401){
            let res = response
            res["status"]="warning"
            res["message"]="You must be new here!! Please Sign Up."                
            setResponse(res)
            setSnackbar(true)
            setBackdrop(false)
            // setRedirectAlert(true)
            props.loginListener(request.status)
            return response 
        }
        else if(request.status === 500){
            let res = response
            res["status"]="warning"
            res["message"]="Check your internet connection."                
            setResponse(res)
            setSnackbar(true)
            setBackdrop(false)
            // setRedirectAlert(true)
            props.loginListener(request.status)
            return response 
        }

        
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

    const validateForm = ()=>{
        return userEmail !== "" && userPassword !== "";
    }


    const snackbarAlert = <SnackBar 
                    status={response.status}
                    message={response.message}
                    show={snackbar}
                    onClose={()=>{setSnackbar(false)}}
                />

    return(
        
        <div className="signin-wrapper">
            <Backdrop open={backdrop}/>
            {snackbarAlert}
            <AlertDialog loginRedirect={props.loginRedirect} open={redirectAlert} onClose={()=>setRedirectAlert(false)} />
            
            <div className="signin-form-wrapper">
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
                        <ActionButton onClick={submitForm} title={"create account"} icon={<PersonAddSharp />}/>
                    </div>
                    <div className="social-auth">
                        <SocialLogin onClick={submitForm} title={"Google"} icon={<GTranslate />}/>
                        <SocialLogin onClick={submitForm} title={"FaceBook"} icon={<Facebook />}/>
                    </div>
                    
            </div>
        
        </div>
        
    )


}

export default SignIn;