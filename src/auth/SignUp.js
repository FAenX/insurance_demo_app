import React from "react"
import {Form} from "react-bootstrap"
import BackDrop from "../components/BackDrop"
import {Button} from "@material-ui/core"
import SnackBar from "../components/SnackBar"
import {withRouter } from "react-router-dom";


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
                
                let response = this.state.response
                response["status"]="success"
                response["message"]="Successfully created"                
                this.setState({
                    response,
                    snackBar: true,
                    backdrop: false
                })
                return res.json().then(data=>data).catch(err=>err)                
            }else{
                
                let response = this.state.response
                response["status"]="error"
                response["message"]="An error occurred"
                
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
        if (response !== null &&
            response !== undefined &&
            Object.keys(response).length > 1)
            {
                //sessionStorage.setItem("user", JSON.stringify(response))
                setTimeout(()=>{
                    this.props.history.push("signin") 
                }, 1000)
                
            }
               
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
                    <div>{alert}</div>
                    <div className="headline-text sliding-effect">
                        Sign Up
                    </div>
                    <div className="signup-form-wrapper">
                        <Form>
                            <Form.Group 
                                controlId="formBasicEmail"
                                className="sliding-effect"
                            >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={this.handleEmailChange}/>
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="sliding-effect">
                            <Form.Label>First name</Form.Label>
                            <Form.Control placeholder="First name" onChange={this.handleFirstNameChange}/>
                            <Form.Label>Last name</Form.Label>
                            <Form.Control placeholder="Last name" onChange={this.handleLastNameChange}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword" className="sliding-effect10s">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={this.handlePasswordChange}/>
                            </Form.Group>
                            <Button 
                                type="submit" 
                                variant="outlined" 
                                color="primary" 
                                className="sliding-effect10s"
                                onClick={this.submitForm}>
                                Submit
                            </Button> 
                            <BackDrop open={this.state.backdrop}/>
                        </Form>
                    </div>
                
            </div>
        )
    }
}

export default withRouter(SignUp)