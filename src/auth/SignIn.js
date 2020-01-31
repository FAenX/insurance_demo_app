import React from "react"
import { Form } from "react-bootstrap"
import {Button, Drawer} from "@material-ui/core"
import Backdrop from "../components/BackDrop"
import SnackBar from "../components/SnackBar"
import FreeQuotationButton from "../components/FreeQuotationButton"
import clsx from "clsx";
import {withRouter} from "react-router-dom"


class SignIn extends React.Component {
    constructor(props){
        super(props)
        this.state={
            userEmail: "",
            userPassword: "",          
            response: {
                message: "",
                status: ""
            },
            creds: {},
            isLoading: false,
            backdrop: false,
            SnackBar: false,
        }
        this.submitForm = this.submitForm.bind(this)
    }

    componentDidMount =()=>{
        
    }

    onCloseSnackBar=()=>{
        this.setState({
            snackBar: false
        })
    }

    async submitForm (event) {
        event.preventDefault()
        this.setState({
            backdrop: true,
        })
        
        const url = "/api/v1/users/token/"
        const data = {email: this.state.userEmail, password: this.state.userPassword}
        const request = fetch(url, {
            method: 'POST', 
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) 
        }).then(res=>res.json()).catch(err=>err);

        const response = await request.then(res=>{
        if (res !== null &&
            res !== undefined &&
            Object.keys(res).length > 1)
        {
            sessionStorage.setItem("tokens", JSON.stringify(res))
            let response = this.state.response
                response["status"]="success"
                response["message"]="Successfully Logged in"                
                this.setState({
                    response,
                    snackBar: true,
                    backdrop: false
                })
                this.props.successListener()
            setTimeout(()=>{
                this.handleRedirectOnLogin()  
            }, 1000)

            
        }                        
                       
                                    
            return res              
                
        }).catch(err=>err)
              
       
        console.log(response)
        
    }

    handleEmailChange = (event) =>{
        event.preventDefault()
        console.log(event.target.value)
        this.setState({
            
                userEmail: event.target.value
            
        })
    }

    handlePasswordChange = (event) =>{
        event.preventDefault()
        console.log(event.target.value)
        this.setState({         
                userPassword: event.target.value        
           
        })
    
    }

    handleRedirectOnLogin = () => {
        setTimeout(()=>{
            this.props.history.push("/dashboard")
        }, 1000)
        
    }

    validateForm = ()=>{
        return this.state.userEmail !== "" && this.state.userPassword !== "";
    }
    signUp=()=>{
        this.props.history.push("/signup")
    }

    render(){
        let alert = <SnackBar 
                        status={this.state.response.status}
                        message={this.state.response.message}
                        show={this.state.snackBar}
                        onClose={this.onCloseSnackBar}
                    />

        return(
            <Drawer 
            anchor="top"
            open={this.props.open}
            variant="persistent"
            className={clsx("drawer", {
                "drawerOpen": this.props.open,
                "drawerClose": !this.props.open,
              })}
            >
            <div className="signin-wrapper">
                <Backdrop open={this.state.backdrop}/>
               
                <div>{alert}</div>
                <div className="headline-text sliding-effect">
                    Sign In
                </div>
                <div className="signin-form-wrapper">
                    <Form>
                        <Form.Group controlId="formBasicEmail" className="sliding-effect">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="Enter email" 
                                onChange={this.handleEmailChange}/>
                            <Form.Text 
                                className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group 
                            controlId="formBasicPassword" className="sliding-effect">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Password" 
                                onChange={this.handlePasswordChange}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox" className="sliding-effect8s">
                            <Form.Check 
                                type="checkbox" 
                                label="Check me out" 
                            />
                        </Form.Group>
                        <div className="signin-button">
                        <Button 
                            type="submit" 
                            variant="outlined" 
                            color="primary" 
                            onClick={this.submitForm}
                            className="sliding-effect10s"
                        >
                            Submit
                        </Button> 
                        <Button 
                            type="submit" 
                            
                            color="primary" 
                            className="signup sliding-effect10s"
                            onClick={this.signUp}
                        >
                            Create account
                        </Button>
                        </div>
                    </Form>
                </div>
           
            </div>
           </Drawer>
        )
    }

}

export default withRouter(SignIn);