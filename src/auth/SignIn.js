import React from "react"
import { Form } from "react-bootstrap"
import {Button} from "@material-ui/core"
import Backdrop from "../components/BackDrop"
import SnackBar from "../components/SnackBar"


class SignIn extends React.Component {
    constructor(props){
        super(props)
        this.state={
            userEmail: "",
            userPassword: "",          
            style: {
                response: "",
                data: ""
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
            setTimeout(()=>{
                this.handleRedirectOnLogin()  
            }, 1000)

            this.setState({
                SnackBar: true,
            }) 
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

    render(){
        

        return(
            <div className="signin-wrapper">
                <Backdrop open={this.state.backdrop}/>
                <SnackBar 
                    variant="success" 
                    message="Successfull"
                    show={this.state.SnackBar}
                />
                <div>{alert}</div>
                <div className="headline-text">
                    Sign In
                </div>
                <div className="signin-form-wrapper">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
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
                            controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Password" 
                                onChange={this.handlePasswordChange}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check 
                                type="checkbox" 
                                label="Check me out" />
                        </Form.Group>
                        <div className="signin-button">
                        <Button 
                            type="submit" 
                            onClick={this.submitForm}>
                            Submit
                        </Button> 
                        <p>Create account</p>
                        </div>
                    </Form>
                </div>
           
            </div>
        )
    }

}

export default SignIn;