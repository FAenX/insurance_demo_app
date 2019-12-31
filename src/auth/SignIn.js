import React from "react"
import { Form, Alert } from "react-bootstrap"
import LoaderButton from "../LoaderButton";

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
        }
    }

    componentDidMount =()=>{
        this.setState({
            
            userEmail:"",
            userPassword: "",
           
            style: {
                response: ""
            },
            isLoading: false,
            creds: {}
        })
    }

    submitForm =(event) => {
        event.preventDefault()
       
        const url = "/api/v1/users/token/"
        const data = {email: this.state.userEmail, password: this.state.userPassword}

        fetch(url, {
            method: 'POST', 
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) 
        }).then(res=>{   
           
            if (res.status === 200){
               res.json().then(data=>{
                    this.setState({                        
                        creds: data,
                        style: {
                            response: res.status,
                            data: "success"
                        }                    
                   })
                   this.props.login()
                   localStorage.setItem("access", data.access) 
                   localStorage.setItem("refresh", data.refresh)                          
                   setTimeout(()=>{
                       this.handleRedirectOnLogin()
                   }, 1000)

               }).catch(err=>{
                   console.log(err)
               })
           } else if (res.status === 401){
               res.json().then(res=>{
                   console.log(res)
                   
                    this.setState({
                        style: {
                            response: res.detail
                        }
                    })


               }).catch(err=>{
                   console.log(err)
               })
           }
            
            
            
        }).catch(err=>{
            console.log(err)
        });
        
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
        this.props.history.push("/dashboard")
    }

    validateForm = ()=>{
        return this.state.userEmail !== "" && this.state.userPassword !== "";
    }

    render(){
        let alert;

        if (this.state.style.response === ""){
            alert = ""
        } else if(this.state.style.response === 200) {
            alert = <Alert variant="success">{this.state.style.data}</Alert>
        }  else {
            alert = <Alert variant="danger">{this.state.style.response}</Alert>
        }

        return(
            <div className="signin-page">
            <div className="signin-wrapper">
                <div>{alert}</div>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={this.handleEmailChange}/>
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={this.handlePasswordChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <div className="signin-button">
                    <LoaderButton variant="primary" type="submit" desabled={!this.validateForm()} isLoading={this.state.isLoading} onClick={this.submitForm}>
                        Submit
                    </LoaderButton> 
                    <p>Create account</p>
                    </div>
                </Form>

            </div>
                
            
            </div>
        )
    }

}

export default SignIn;