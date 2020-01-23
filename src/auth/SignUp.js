import React from "react"
import {Form, Alert} from "react-bootstrap"
import BackDrop from "../components/BackDrop"
import {Button} from "@material-ui/core"
import SnackBar from "../components/SnackBar"


class SignUp extends React.Component {
    constructor(props){
        super(props)
        this.state={
            //form
            userEmail: "",
            userPassword: "",
            userFirstName: "",
            userLastName: "",
            response: {
                status: "",
                message: "",
            },
            // feedback
            backdrop: false,
            snackBar: false

        }
        this.submitForm=this.submitForm.bind(this)
    }

    componentDidMount =()=>{
        
    }

    async submitForm (event) {
        event.preventDefault()
        this.setState({
            backdrop: true
        })
        
        const data = {
            email: this.state.userEmail,
            password: this.state.userPassword,
            first_name: this.state.userFirstName,
            last_name: this.state.userLastName
        }
        const url = "/api/v1/users/"

        const request = fetch(url, {
            method: 'POST', 
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) 
        }).then(res=>{
            console.log(res.status)
            if (res.status===201){
                console.log("success")
                let response = this.state.response
                response["status"]="success"
                response["message"]="Successfully created"
                console.log(response)
                this.setState({
                    response,
                    snackBar: true,
                    backdrop: false
                })
                
            }else{
                console.log("danger")
                let response = this.state.response
                response["status"]="error"
                response["message"]="An error occurred"
                console.log(response)
                this.setState({
                    response,
                    snackBar: true,
                    backdrop: false
                })
                
            } 
            return res
            
        }).catch(err=>err)
        
        const response = await request.then(res=>{
            return res
        }).catch(err=>{
            //console.log(err)
            return err
        });
        console.log(response)
        
    }

    onCloseSnackBar=()=>{
        this.setState({
            snackBar: false
        })
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

        let alert = <SnackBar 
                        status={this.state.response.status}
                        message={this.state.response.message}
                        show={this.state.snackBar}
                        onClose={this.onCloseSnackBar}
                    />

        return(
            <div className="signup-wrapper">
                <BackDrop open={this.state.backdrop}/>
                    <div>{alert}</div>
                    <div className="headline-text">
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
                            <Button 
                                type="submit" 
                                onClick={this.submitForm}>
                                Submit
                            </Button> 
                        </Form>
                    </div>
                
            </div>
        )
    }
}

export default SignUp