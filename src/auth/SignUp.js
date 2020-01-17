import React from "react"
import {Form, Alert} from "react-bootstrap"
import LoaderButton from "../helpers/LoaderButton"
import {Button} from "@material-ui/core"


class SignUp extends React.Component {
    constructor(props){
        super(props)
        this.state={
            userEmail: "",
            userPassword: "",
            userFirstName: "",
            userLastName: "",
            style: {
                response: "",
                data:""
            },
        }
    }

    componentDidMount =()=>{

        this.setState({
            
            userEmail: "",
            userPassword: "",
            userFirstName: "",
            userLastName: "",
            style: {
                response: ""
            },
            
        })

    }

    submitForm =(event) => {
        event.preventDefault()
        const data = {
            email: this.state.userEmail,
            password: this.state.userPassword,
            first_name: this.state.userFirstName,
            last_name: this.state.userLastName
        }
        const url = "/api/v1/users/"

        fetch(url, {
            method: 'POST', 
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) 
        }).then(res=>{
            if (res.satus === 200 ){
                res.json().then(data=>{

                    console.log(data)
                })
                .catch(err=>{
                    
                    console.log(err)
                })

            }else if (res.status === 400){
                res.json().then(data=>{
                    if (data.email) {
                        this.setState({
                            style: {
                                response: res.status,
                                data: data.email
                            }
                    })
                    
                    
               
                } else {
                    this.setState({
                        style: {
                            response: res.status,
                            data: "Form did not validate"
                        }
                    })
                }
            })
        }
        
            


        }).catch(err=>console.log(err));
        
    }

    handleEmailChange = (event) =>{
        this.setState({
            userEmail: event.target.value
        })
    }

    handleFirstNameChange = (event) =>{
        this.setState({
            userFirstName: event.target.value
        })
    }

    handleLastNameChange = (event) =>{
        this.setState({
            userLastName: event.target.value
        })
    }

    handlePasswordChange = (event) =>{
        this.setState({
            userPassword: event.target.value
        })
    }

    validateForm = ()=>{
        return this.state.userEmail.length > 0 
            && this.state.userPassword.length > 0 
            && this.state.userFirstName.length > 0 
            && this.state.userLastName.length > 0
    }

    render(){

        let alert;

        if (this.state.style.response === ""){
            alert = ""
        } else if(this.state.style.response === 200) {
            alert = <Alert variant="success">{this.state.style.response}</Alert>
        }  else {
            alert = <Alert variant="danger">{this.state.style.data}</Alert>
        }


        return(
            <div className="signup-wrapper">
                
                <div className="main-body-wrapper">
                    <div>{alert}</div>
                    <div className="main-body-highlight-text">
                        Sign Up
                    </div>
                    <div className="signup-form-wrapper">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={this.handleEmailChange}/>
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group>
                            
                                
                            <Form.Label>First name</Form.Label>
                            <Form.Control placeholder="First name" onChange={this.handleFirstNameChange}/>
                        
                            <Form.Label>Last name</Form.Label>
                            <Form.Control placeholder="Last name" onChange={this.handleLastNameChange}/>
                                    
                                
                            
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={this.handlePasswordChange}/>
                            </Form.Group>

                            <LoaderButton variant="primary" type="submit" desabled={!this.validateForm()} isLoading={this.state.isLoading} onClick={this.submitForm}>
                                Submit
                            </LoaderButton>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp