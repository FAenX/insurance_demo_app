import React from 'react';
import { Form, Alert } from "react-bootstrap"
import LoaderButton from "../LoaderButton"
import {withRouter} from "react-router-dom"

class Rates extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            carValue: "",
            regNo: "",
            tonnes: "",
            premium: "",
            isLoading:false
        }
    }
    
    componentWillMount =()=>{
        this.cover = this.props.chosenProductAlias;
        this.chosenProduct = JSON.parse(sessionStorage.getItem("chosen_product"))
    }

    componentDidMount = () => {        
        this.setState({
            carValue: 100000,
            regNo: "KBK 200",
            email: "name@example.com",
            tonnes: "3"
       })       
    }


    // handle submit
    onSubmitHandler = (event) => {
        event.preventDefault();
        this.setState({isLoading:true})
        const data = {
            carValue: this.state.carValue,
            cover: this.cover,
            regNo: this.state.regNo,
            email: this.state.email,
            tonnes: this.state.tonnes,
        };
        console.log(data)

        const url = "api/v1/quotes/quote/";
        const response = fetch(url, {
            method: 'POST',  
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
              },
            body: JSON.stringify(data),

        }).then(
            (res)=> res
        ).catch(
            (err) => err
        );

        response.then((res)=>{
            res.json().then((res) =>{
            
            if (res.status === "success"){
                this.setState({
                    premium: res.data
                })
                const data = this.state
                this.props.handleRequest(data)
                setTimeout(() => this.handleRedirectOnResponse(), 1000)

            } else if (res.status === "error"){
                this.setState({
                    premium: res.error
                })
                this.setState({isLoading:false})
            }else {
                console.log(res)
                this.setState({isLoading:false})
            }
        }).catch(err=>{
            this.setState({
                premium: res.status,
            })
            this.setState({isLoading:false})
        })
        }).catch((err)=>{
            console.log(`err: ${err}`)
            this.setState({isLoading:false})
        });

    }

    // handle car value chage
    onValueChangeHandler = (event) => {
        event.preventDefault()
        console.log(event.target.value)
        this.setState({
            carValue: event.target.value
        })
    }

    // handle email change
    onEmailChangeHandler = (event) => {
        event.preventDefault()
        console.log(event.target.value)
        this.setState({
            email: event.target.value
        })
    }


    // handle tonnes change for commercial vehicles
    onLoadChangeHandler = (event) => {
        event.preventDefault()
        this.setState({
            tonnes: event.target.value
        })
       
    }

    //handle chsnge reg number
    onRegChangeHandler = (event) => {
        event.preventDefault()
        this.setState({
            regNo: event.target.value
        })
       
    }

    // handle redirect after response
    handleRedirectOnResponse =()=>{
        this.props.history.push('/quotation')
        
    }

    validateForm=()=>{
        return this.state.carValue && this.state.regNo && this.cover
    }
    render(){

        let tonnes;
        let quoteAlert;

       
        
        if (!this.cover || !this.chosenProduct){
            quoteAlert = <Alert variant="warning">Please select cover</Alert>
        }
        
        if (this.cover.startsWith("commercial") ){
            tonnes = <div className="quote-form">
                    
                    <Form.Label>Load size</Form.Label>
                    <Form.Control as="select" onChange={this.onLoadChangeHandler}>
                        <option value="3">3 tones</option>
                        <option value="38">3-8 tones</option>
                        <option value="810">8-10 tones</option>
                    </Form.Control>
                    </div>
        } 

        if (this.state.premium === "something went wrong"){
            quoteAlert = <Alert variant="danger"> { this.state.premium }</Alert>
        } else if (this.state.premium === "Working on it"){
            quoteAlert = <Alert variant="warning">Sorry the feature is not available yet</Alert>
        } else if (this.state.premium === 504 || this.state.premium === 404 || this.state.premium === 500){
            quoteAlert = <Alert variant="danger">{ this.state.premium }</Alert>
        } else if (this.state.premium ){
            quoteAlert = <Alert variant="success"> Successfull. Redirecting to quotation</Alert>
        } 

        return(
            <div className="rates">
                <div>{quoteAlert}</div>
                <div className="rates-title-wrapper"> 
                    <div className="rates-title"> Request quotation for: {this.chosenProduct.name}</div> 
                </div>

                <div className="aplication-instructions-wrapper">
                <div className="aplication-instructions-text-wrapper">
                    
                    <div className="aplication-instructions-title">
                        Get insured in just five simple steps:
                    </div>
                    <div className="aplication-instructions-text">
                        <ol>
                            <li> Step 1</li>Fill out the form below and click <b>Get quote</b> 
                                to receive a quote for {this.chosenProduct.name}.
                            <li> Step 2</li>After receiving your quote on the screen. 
                                Click on <b>Accept</b> to proceed.
                            <li> Step 3</li>Select your preferred payment method.
                            <li> Step 4</li>Fill out your payment information and click 
                                <b>Proceed</b> to process your payment.
                            <li>And finally</li> Download your insurance cover. 
                                Congratulations you’re insured!
                        </ol>
                    </div>
                    </div>
                </div>
                <div className="rates-form-wrapper">
                    <div className="rates-title-wrapper">
                        <div className="rates-title">Request quotation</div>
                    </div>
                    <div className="rates-form">
                        <div className="r-form">
                            <Form>
                            <Form.Group controlId="exampleForm.ControlInput1" style={{display: "none"}}>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" onChange= {this.onEmailChangeHandler} />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Vehicle registration</Form.Label>
                                <Form.Control size="lg" type="text" placeholder= {this.state.regNo} />
                                <Form.Label>Vehicle value</Form.Label>
                                <Form.Control onChange= {this.onValueChangeHandler} size="lg" type="text" placeholder={this.state.carValue} />
                                {tonnes}
                            </Form.Group>
                            </Form>
                        </div>
                    </div>
                    <div className="rates-submit-button-wrapper"> 
                        <LoaderButton variant="primary" type="submit" isLoading={this.state.isLoading} disabled={!this.validateForm()} onClick={this.onSubmitHandler}>
                                Get quote
                        </LoaderButton>
                    </div>      
            </div>
            </div>
        )
    }
}

export default withRouter(Rates);