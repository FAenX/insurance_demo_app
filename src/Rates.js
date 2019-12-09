import React from 'react';
import { Form, Alert } from "react-bootstrap"
import LoaderButton from "./LoaderButton"
import {withRouter} from "react-router-dom"

class Rates extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            carValue: "",
            cover: "",
            regNo: "",
            tonnes: "",
            premium: "",
            isLoading:false
        }
    }
    
    componentDidMount = () => {
        this.setState({
           cover: "privatethirdpartyonly",
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
        const data = this.state;
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

    //handle cover change
    onProductChangeHandler = (event) => {
        event.preventDefault()
        this.setState({
            cover: event.target.value
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
        return this.state.carValue && this.state.regNo && this.state.cover
    }
    render(){

        let tonnes;
        let quoteAlert;
        
        if (this.state.cover.startsWith("commercial") ){
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
            <div className="products">
                <div>{quoteAlert}</div>
                <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Select Motor insurance product</Form.Label>
                    <Form.Control as="select" onChange={this.onProductChangeHandler}>
                        <option value="privatethirdpartyonly">Private third party only</option>
                        <option value="privatethirdpartyfireandtheft">Private third party fire and theft</option>
                        <option value="privatecomprehensive">Private Comprehensive</option>
                        <option value="commercialthirdparty">Commercial Third party only</option>
                        <option value="commercialthirdpartyfireandtheft">Commercial third party fire and theft</option>
                        <option value="commercialcomprehensive">Commercial comprehensive</option>
                        <option value="forhirethirdpirtyonly">For hire Third party only</option>
                        <option value="forhirethirdpirtyfireandtheft">For hire Third party fire and theft</option>
                        <option value="forhirecomprehensive">For hire Comprehensive</option>
                    </Form.Control>
                </Form.Group>
                    <Alert variant="info">
                        <Alert.Link href="#">Insurance cover title</Alert.Link>
                        <p>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </p>
                    <Alert.Link href="#">Application procedure</Alert.Link>
                    <ol>
                        <li> step 1</li>
                        <li> step 2</li>
                        <li> step 3</li>
                    </ol>
                    </Alert>
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
            
                
            <LoaderButton variant="primary" type="submit" isLoading={this.state.isLoading} disabled={!this.validateForm()} onClick={this.onSubmitHandler}>
                    Get quote
            </LoaderButton>
        
            
            </div>
        )
    }
}

export default withRouter(Rates);